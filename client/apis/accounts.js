import request from "superagent"
const accountURL = '/api/v1/accounts'

export async function getAccountListAPI () {
    const res = await request.get(accountURL)
    return res.body
}

export async function addAccountAPI (newAccount, token) {
    const res = await request
    .post(accountURL)
    .set('authorization', `Bearer ${token}`)
    .send(newAccount)
    console.log(res.body)
    return res.body
}

export async function deleteAccountAPI(id, token) {
    try {
      const res = await request
        .delete(`${accountURL}/${id}`)
        .set('authorization', `Bearer ${token}`)
      return res.body
    } catch (err) {
      console.error(err.message)
    }
  }