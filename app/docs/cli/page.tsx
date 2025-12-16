"use client"

import { CodeBlock } from "@/components/docs/code-block"
import Link from "next/link"

export default function CLIPage() {
    return (
        <div className="space-y-10">
            <div className="space-y-4">
                <h1 className="text-4xl font-black">CLI</h1>
                <p className="text-xl text-neutral-600">
                    Use the command line to add components to your project.
                </p>
            </div>

            <div className="space-y-4">
                <p>
                    The NeoBrutal UI CLI lets you add components directly to your project.
                    It handles dependencies, creates the necessary files, and sets up your project configuration.
                </p>
            </div>

            {/* init */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold border-b-2 border-black pb-2">init</h2>
                <p className="text-neutral-600">
                    Initialize your project for NeoBrutal UI. This sets up the configuration and installs base dependencies.
                </p>

                <CodeBlock code={`npx neobrutal-ui init`} language="bash" />

                <div className="space-y-3">
                    <h3 className="text-lg font-bold">What it does</h3>
                    <ul className="text-sm text-neutral-600 space-y-2 list-disc list-inside">
                        <li>Creates a <code className="bg-neutral-200 px-1.5 py-0.5 rounded text-sm">components.json</code> configuration file</li>
                        <li>Installs required dependencies (clsx, tailwind-merge, class-variance-authority)</li>
                        <li>Creates the <code className="bg-neutral-200 px-1.5 py-0.5 rounded text-sm">lib/utils.ts</code> file with the <code className="bg-neutral-200 px-1.5 py-0.5 rounded text-sm">cn</code> helper</li>
                        <li>Sets up your <code className="bg-neutral-200 px-1.5 py-0.5 rounded text-sm">components/ui</code> directory</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h3 className="text-lg font-bold">Options</h3>
                    <div className="border-2 border-black rounded-base overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-neutral-100 border-b-2 border-black">
                                <tr>
                                    <th className="text-left p-3 font-bold">Option</th>
                                    <th className="text-left p-3 font-bold">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-neutral-200">
                                    <td className="p-3 font-mono">-y, --yes</td>
                                    <td className="p-3 text-neutral-600">Skip prompts and use defaults</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-mono">-c, --cwd &lt;path&gt;</td>
                                    <td className="p-3 text-neutral-600">Set the working directory (defaults to current directory)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="space-y-3">
                    <h3 className="text-lg font-bold">Example</h3>
                    <CodeBlock code={`# Initialize with default settings
npx neobrutal-ui init -y

# Initialize in a specific directory
npx neobrutal-ui init -c ./my-project`} language="bash" />
                </div>
            </div>

            {/* add */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold border-b-2 border-black pb-2">add</h2>
                <p className="text-neutral-600">
                    Add components to your project. Components are copied to your <code className="bg-neutral-200 px-1.5 py-0.5 rounded text-sm">components/ui</code> folder.
                </p>

                <CodeBlock code={`npx neobrutal-ui add [components...]`} language="bash" />

                <div className="space-y-3">
                    <h3 className="text-lg font-bold">What it does</h3>
                    <ul className="text-sm text-neutral-600 space-y-2 list-disc list-inside">
                        <li>Fetches the component source code from the registry</li>
                        <li>Resolves and adds any component dependencies</li>
                        <li>Installs required npm packages (like Radix UI primitives)</li>
                        <li>Creates the component file in your project</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h3 className="text-lg font-bold">Options</h3>
                    <div className="border-2 border-black rounded-base overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-neutral-100 border-b-2 border-black">
                                <tr>
                                    <th className="text-left p-3 font-bold">Option</th>
                                    <th className="text-left p-3 font-bold">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-neutral-200">
                                    <td className="p-3 font-mono">-y, --yes</td>
                                    <td className="p-3 text-neutral-600">Skip confirmation prompts</td>
                                </tr>
                                <tr className="border-b border-neutral-200">
                                    <td className="p-3 font-mono">-o, --overwrite</td>
                                    <td className="p-3 text-neutral-600">Overwrite existing files</td>
                                </tr>
                                <tr className="border-b border-neutral-200">
                                    <td className="p-3 font-mono">-a, --all</td>
                                    <td className="p-3 text-neutral-600">Add all available components</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-mono">-c, --cwd &lt;path&gt;</td>
                                    <td className="p-3 text-neutral-600">Set the working directory</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="space-y-3">
                    <h3 className="text-lg font-bold">Examples</h3>
                    <CodeBlock code={`# Add a single component
npx neobrutal-ui add button

# Add multiple components
npx neobrutal-ui add button card input dialog

# Add all components
npx neobrutal-ui add --all

# Overwrite existing components
npx neobrutal-ui add button --overwrite`} language="bash" />
                </div>
            </div>

            {/* list */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold border-b-2 border-black pb-2">list</h2>
                <p className="text-neutral-600">
                    List all available components in the registry.
                </p>

                <CodeBlock code={`npx neobrutal-ui list`} language="bash" />

                <div className="space-y-3">
                    <h3 className="text-lg font-bold">Example output</h3>
                    <CodeBlock code={`Available components:

  accordion    Vertically stacked interactive headings
  alert        Displays important messages
  avatar       Profile image with fallback
  badge        Status indicators and labels
  button       Interactive button with variants
  card         Flexible content container
  checkbox     Binary selection control
  dialog       Modal dialog window
  input        Text input field
  ...`} language="text" />
                </div>
            </div>

            {/* diff */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold border-b-2 border-black pb-2">diff</h2>
                <p className="text-neutral-600">
                    Check for updates to components you have installed.
                </p>

                <CodeBlock code={`npx neobrutal-ui diff [component]`} language="bash" />

                <div className="space-y-3">
                    <h3 className="text-lg font-bold">What it does</h3>
                    <ul className="text-sm text-neutral-600 space-y-2 list-disc list-inside">
                        <li>Compares your local component files with the registry</li>
                        <li>Shows a diff of any changes</li>
                        <li>Helps you update components while keeping your customizations</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h3 className="text-lg font-bold">Examples</h3>
                    <CodeBlock code={`# Check all components for updates
npx neobrutal-ui diff

# Check a specific component
npx neobrutal-ui diff button`} language="bash" />
                </div>
            </div>

            {/* Configuration */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold border-b-2 border-black pb-2">Configuration</h2>
                <p className="text-neutral-600">
                    The CLI creates a <code className="bg-neutral-200 px-1.5 py-0.5 rounded text-sm">components.json</code> file in your project root.
                </p>

                <CodeBlock code={`{
  "$schema": "https://neobrutal-ui-mocha.vercel.app/schema.json",
  "style": "default",
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "neutral"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}`} language="json" />

                <div className="space-y-3">
                    <h3 className="text-lg font-bold">Options</h3>
                    <div className="border-2 border-black rounded-base overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-neutral-100 border-b-2 border-black">
                                <tr>
                                    <th className="text-left p-3 font-bold">Key</th>
                                    <th className="text-left p-3 font-bold">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-neutral-200">
                                    <td className="p-3 font-mono">style</td>
                                    <td className="p-3 text-neutral-600">Component style variant (currently only &quot;default&quot;)</td>
                                </tr>
                                <tr className="border-b border-neutral-200">
                                    <td className="p-3 font-mono">tailwind.css</td>
                                    <td className="p-3 text-neutral-600">Path to your global CSS file</td>
                                </tr>
                                <tr className="border-b border-neutral-200">
                                    <td className="p-3 font-mono">aliases.components</td>
                                    <td className="p-3 text-neutral-600">Import alias for components directory</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-mono">aliases.utils</td>
                                    <td className="p-3 text-neutral-600">Import alias for utils file</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Next Steps */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold border-b-2 border-black pb-2">Next Steps</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link href="/docs/components/button" className="block">
                        <div className="p-4 border-2 border-black rounded-base hover:bg-main transition-colors">
                            <h3 className="font-bold">Browse Components</h3>
                            <p className="text-sm text-neutral-600">See all available components</p>
                        </div>
                    </Link>
                    <Link href="/docs/theming" className="block">
                        <div className="p-4 border-2 border-black rounded-base hover:bg-main transition-colors">
                            <h3 className="font-bold">Theming</h3>
                            <p className="text-sm text-neutral-600">Customize colors and styles</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
