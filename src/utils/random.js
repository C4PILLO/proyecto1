export const getRamdom = (list) =>{
    const randomIndex = Math.floor(Math.random() * list.length)
    return list[randomIndex]
  }