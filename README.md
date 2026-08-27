# repo2llm 🚀

Supercharge your AI coding sessions by packing your entire codebase into a single, LLM-friendly markdown file.

When you're working with ChatGPT, Claude, or Gemini, you often need to provide context about your project. Copy-pasting individual files is tedious. `repo2llm` automates this process by traversing your directory, respecting `.gitignore`, and generating a beautifully formatted markdown file containing all your code with proper syntax highlighting.

## 💖 Support the Developer

If `repo2llm` saves you time and makes your AI workflows smoother, please consider supporting its ongoing development! This project is maintained by an independent developer.

👉 **[Sponsor on Polar.sh](https://polar.sh/albert-dev)** 👈

Your support helps me build more awesome tools for the developer community!

## Installation

You can run it directly without installing via `npx`:

```bash
npx repo2llm
```

Or install it globally:

```bash
npm install -g repo2llm
```

## Usage

Navigate to your project directory and run:

```bash
repo2llm
```

This will generate a `repo_context.md` file in the current directory.

### Options

- `-d, --dir <path>`: Specify the directory to pack (default: current directory)
- `-o, --output <file>`: Specify the output file name (default: `repo_context.md`)
- `-i, --ignore <paths>`: Additional comma-separated paths to ignore
- `-h, --help`: Show help message

### Example

```bash
repo2llm -d ./src -o my_codebase.md -i "tests,docs,scripts"
```

## How it works

1. It reads your local `.gitignore` and applies default ignores (like `node_modules`, `dist`, `.git`).
2. It recursively walks through your directory.
3. It automatically detects and skips binary files.
4. It concatenates the contents into a single markdown file, using the relative file path as headers and applying the correct language tag for code blocks.

## License

MIT
