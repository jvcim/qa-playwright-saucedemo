// Contas de demonstração publicamente divulgadas pela Sauce Labs.
export const users = {
  standard: {
    username: process.env.STANDARD_USER ?? 'standard_user',
    password: process.env.STANDARD_PASSWORD ?? 'secret_sauce'
  },
  locked: { username: 'locked_out_user', password: 'secret_sauce' }
} as const;

export const checkoutCustomer = {
  firstName: 'QA',
  lastName: 'Portfolio',
  postalCode: '88000-000'
} as const;
