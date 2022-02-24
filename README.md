# [vue3](https://vuejs.org/guide/introduction.html)-[vite](https://vitejs.dev/guide/)-[element+](https://element-plus.org/en-US/)

Vue3 + Vite2 + Element plus.

## Build development environment

Install [Visual Studio Code](https://code.visualstudio.com/Download), [Node.js](https://nodejs.org/zh-cn/download/), [Git](https://git-scm.com/downloads), [[TortoiseGit](https://tortoisegit.org/download/)]

## Create a new repository in [GitHub](https://github.com/new)

### Repository template

No template

### Owner / Repository name

my-id/my-repo-name

### Description

Vue3 project.

### Public · Private

◉ Public

☉ Private

### Initialize this repository with

☑ Add a README file

☑ Add .gitignore

.gitignore template: Node ▾

☑ Choose a license

License: GNU General Public License v3.0 ▾

### Create repository

## Clone repository from GitHub

```PowerShell / Git Bash
# PowerShell / Git Bash
git clone https://github.com/my-id/my-repo-name.git
```

```PowerShell / Git Bash
# PowerShell / Git Bash
git clone https://github.com/element-plus/element-plus-vite-starter.git
```

## Create project

### Install [yarn](https://classic.yarnpkg.com/lang/en/docs/)

```PowerShell
# PowerShell
npm install --global yarn
```

### Install [extensions for Visual Studio Code](https://marketplace.visualstudio.com/vscode)

Install [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar), [[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)], [[git-commit-plugin](https://marketplace.visualstudio.com/items?itemName=redjue.git-commit-plugin)]

### Install Ant Design Vue

```PowerShell
# PowerShell
yarn add ant-design-vue
```

```TypeScript
// vite.config.ts
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver(),
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: path.resolve(pathSrc, 'components.d.ts'),
    }),
  ],
})
```

### 🛈[Chunks are larger than 500 KiB]

> (!) Some chunks are larger than 500 KiB after minification. Consider:
> Using dynamic import() to code-split the application
> Use build.rollupOptions.output.manualChunks to improve chunking: <https://rollupjs.org/guide/en/#outputmanualchunks>
> Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.

```TypeScript
// vite.config.ts
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
  },
})
```

### Install packages

```PowerShell
# PowerShell
yarn install
```

### Complication project

```PowerShell
# PowerShell
yarn run build
```

#### [Vue [SFC](https://vuejs.org/guide/scaling-up/sfc.html)]

> [Vue Single-File Components](https://www.npmjs.com/package/vite-plugin-singlefile) (aka *.vue files, abbreviated as SFC) is a special file format that allows us to encapsulate the template, logic, and styling of a Vue component in a single file.

```PowerShell
# PowerShell
yarn add --dev vite-plugin-singlefile
```

```TypeScript
// vite.config.ts
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
 plugins: [vue(), viteSingleFile()],
 build: {
  target: "esnext",
  outDir: 'dist',
  assetsInlineLimit: 100000000,
  chunkSizeWarningLimit: 100000000,
  cssCodeSplit: false,
  brotliSize: false,
  rollupOptions: {
   inlineDynamicImports: true,
   output: {
    manualChunks: () => "everything.js",
   },
  },
 },
})
```

#### Compile without adding hash code suffix to resource files

```TypeScript
// vite.config.ts
export default defineConfig({
  build: {
    target: "esnext",
    outDir: 'dist',
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    brotliSize: false,
    rollupOptions: {
      inlineDynamicImports: true,
      output: {
        manualChunks: () => 'everything.js',
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})
```

### Live Server

```PowerShell
# PowerShell
vite
```

### 🛈[Network: use `--host` to expose]

```TypeScript
// vite.config.ts
export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  build: {
    target: "esnext",
    outDir: 'dist',
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    brotliSize: false,
    rollupOptions: {
      inlineDynamicImports: true,
      output: {
        manualChunks: () => 'everything.js',
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})
```
