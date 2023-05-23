import fs from 'fs'
import path from 'path'
import { camelCase } from 'camel-case'
import { pascalCase } from 'pascal-case'

const generateImageExport = () => {
  const [, , iconDir] = process.argv

  const imageExtensions = ['.svg', '.png']

  const imageFiles = fs
    .readdirSync(path.join(__dirname, iconDir))
    .filter((file) => imageExtensions.indexOf(path.extname(file)) !== -1)

  const fileNameWithoutExt = (file: string): string =>
    path.basename(path.basename(file), path.extname(file))

  const imports = imageFiles
    .map((file) => {
      const extName = path.extname(file)
      const fileName = fileNameWithoutExt(file)
      let importString = `import ${camelCase(fileName)}Image from './${file}'`

      if (extName === '.svg') {
        importString += `\nimport { ReactComponent as ${pascalCase(
          fileName
        )} } from './${file}'`
      }

      return importString
    })
    .join('\n')

  const exportSources = imageFiles
    .map((file) => `\t${camelCase(fileNameWithoutExt(file))}Image,`)
    .join('\n')

  const exportComponents = imageFiles
    .filter((file) => path.extname(file) === '.svg')
    .map((file) => `\t${pascalCase(fileNameWithoutExt(file))},`)
    .join('\n')

  const separatedExports = `${imports}\n\nexport {\n${exportSources}\n}\nexport {\n${exportComponents}\n}\n`

  fs.writeFileSync(path.join(__dirname, iconDir, 'index.ts'), separatedExports)
}

generateImageExport()
