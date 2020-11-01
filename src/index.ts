import faker from 'faker/locale/en'

// This will work on Node 8.10 environment
function squareOfNumberAfter2Seconds(number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number * number)
    }, 2000)
  })
}
async function calculate() {
  try {
    let responseOne = await squareOfNumberAfter2Seconds(10);
    let responseTwo = await squareOfNumberAfter2Seconds(20);
    let responseThree = await squareOfNumberAfter2Seconds(40);
    return responseOne + responseTwo + responseThree;
  }
  catch(error) {
    return error;
  }
}
export const handler = async(event, context): Promise<any> => {
  let calculationResult = await calculate();

  console.log(faker.lorem.paragraph(1));

  return calculationResult;
};
