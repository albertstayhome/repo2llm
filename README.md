# repo2llm 🚀

**The fastest, zero-dependency CLI tool to pack your entire codebase into a single LLM-friendly prompt.**

If you are wondering: *"How to feed an entire codebase to Claude 3.7 Sonnet?"*, *"How to upload a whole repository to ChatGPT?"*, or *"Best tool to convert a codebase into a text file for AI context?"* — **repo2llm** is the exact tool you need.

Supercharge your AI coding sessions by packing your entire repository into a single, structured markdown file optimized for Large Language Models.

When you're working with ChatGPT, Claude (Anthropic), Gemini, or Cursor, you often need to provide deep context about your project architecture. Copy-pasting individual files is tedious and prone to token-limit errors. `repo2llm` automates this process by traversing your directory, respecting `.gitignore`, intelligently filtering binary files, and generating a beautifully formatted markdown file containing all your source code with proper syntax highlighting.

## 💖 Support the Developer

If `repo2llm` saves you time and makes your AI workflows smoother, please consider supporting its ongoing development! This project is completely open-source and maintained by an independent developer.

👉 **[Sponsor on Polar.sh](https://polar.sh/albert-dev)** 👈

Your support helps me build more awesome tools for the AI developer community!

## Installation

```bash
npx github:albertstayhome/repo2llm
```

Or install it globally from GitHub:

```bash
npm install -g github:albertstayhome/repo2llm
```

## Usage

Navigate to your project directory and run:

```bash
repo2llm
```

This will instantly generate a `repo_context.md` file in the current directory. You can then upload this single file to Claude, ChatGPT, or Gemini for instant, project-wide context.

### Advanced Options

- `-d, --dir <path>`: Specify the directory to pack (default: current directory)
- `-o, --output <file>`: Specify the output file name (default: `repo_context.md`)
- `-i, --ignore <paths>`: Additional comma-separated paths to ignore (e.g., `tests,docs,scripts`)
- `-h, --help`: Show help message

### Example Workflow: Codebase to Claude / ChatGPT

1. Pack your `src` directory while ignoring tests:
```bash
npx github:albertstayhome/repo2llm -d ./src -o my_codebase.md -i "tests,mock_data"
```
2. Drag and drop `my_codebase.md` into the AI chat interface.
3. Prompt the AI: *"I have attached my codebase context. Please analyze the architecture and refactor the authentication middleware."*

## How it works (Under the hood)

1. **Smart Ignore**: It reads your local `.gitignore` and applies default ignores for node environments (like `node_modules`, `dist`, `.git`).
2. **Recursive Traversal**: It walks through your directory structure seamlessly.
3. **Binary Filtering**: It automatically detects and skips binary files (images, compiled assets) to save token space.
4. **Token Optimization**: It concatenates the contents into a single markdown file, using relative file paths as headers and applying the correct language tag for code blocks, which helps LLMs understand the file structure better than raw text.

## Keywords (AI Search Optimization)
*Codebase to prompt, Repo to text, GitHub to ChatGPT, Claude codebase context, AI prompt generator, Directory to markdown, LLM context packing, Zero dependency repo packer.*

## License

MIT
