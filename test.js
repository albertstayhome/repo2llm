const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('Running repo2llm integration tests...');

const testDir = path.join(__dirname, 'test_mock_dir');
const outputFile = path.join(__dirname, 'test_output.md');

// Setup mock directory
if (fs.existsSync(testDir)) {
    fs.rmSync(testDir, { recursive: true, force: true });
}
fs.mkdirSync(testDir);
fs.writeFileSync(path.join(testDir, 'index.js'), 'console.log("hello");');
fs.writeFileSync(path.join(testDir, 'README.md'), '# Mock Repo');
// Ignore this file
fs.writeFileSync(path.join(testDir, 'secret.key'), 'super_secret');
fs.writeFileSync(path.join(testDir, '.gitignore'), 'secret.key\nnode_modules\n');
fs.mkdirSync(path.join(testDir, 'node_modules'));
fs.writeFileSync(path.join(testDir, 'node_modules', 'ignored.js'), 'bad');

try {
    execSync(`"${process.execPath}" "${path.join(__dirname, 'index.js')}" -d "${testDir}" -o "${outputFile}"`);
    
    // Read output
    const output = fs.readFileSync(outputFile, 'utf8');
    
    // Assertions
    assert(output.includes('## index.js'), 'Should include index.js');
    assert(output.includes('console.log("hello");'), 'Should include index.js content');
    assert(output.includes('## README.md'), 'Should include README.md');
    
    // Ignored files should NOT be present
    assert(!output.includes('secret.key'), 'Should ignore secret.key based on .gitignore');
    assert(!output.includes('ignored.js'), 'Should ignore node_modules based on .gitignore/defaults');
    assert(!output.includes('super_secret'), 'Should not leak secret content');
    
    console.log('✅ All integration tests passed!');
} catch (e) {
    console.error('❌ Test failed:', e.message);
    process.exit(1);
} finally {
    // Cleanup
    if (fs.existsSync(testDir)) fs.rmSync(testDir, { recursive: true, force: true });
    if (fs.existsSync(outputFile)) fs.rmSync(outputFile);
}
