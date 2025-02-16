export const get = (locator:string)=>cy.get(locator)
export const wrap =(locator:any) => cy.wrap(locator)
export  const log=(content:any) => cy.log(JSON.stringify(content))
export  const visit=(url:string)=>cy.visit(url)