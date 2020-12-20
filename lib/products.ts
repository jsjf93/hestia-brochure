import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ProductData } from '../common/interfaces'

const productsDirectory = path.join(process.cwd(), 'products')

export function getProductsData(): ProductData[] {
  const fileNames = fs.readdirSync(productsDirectory)

  const allProductsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(productsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    } as ProductData
  })

  return allProductsData;
}
