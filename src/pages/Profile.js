import React from 'react'
import { Footer } from '../components/Footer'
import Header from '../components/Header'
export function Profile() {
  return (
    <div>
      <Header/>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Student Name : </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Student Id : </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Date Of Birth : </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Gender : </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Height : </td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Blood group : </td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Mobile no. : </td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Current Local Address : </td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Parent's mobile no. : </td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Parent Communication Address :</td>
          </tr>
          {/* <tr>
            <th scope="row">3</th>
            <td >Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </table>
      <Footer/>
    </div>
  )
}

