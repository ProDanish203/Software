import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Institute = () => {

  const tableFields = ["S.No", "Logo", "Name", "No Of Campuses", "Status"];

  const instituteData = [
    {
      logo: "https://icon2.cleanpng.com/20180621/hys/kisspng-university-of-karachi-applied-economics-research-c-aqsa-5b2c0ec04a2362.3289880515296140163037.jpg",
      name: "Karachi University",
      noOfcampus: 1,
      status: "Active"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/NEDUET_logo.svg/200px-NEDUET_logo.svg.png",
      name: "Ned University of Engineering and Technology",
      noOfcampus: 2,
      status: "Active"
    },
    {
      logo: "https://www.kindpng.com/picc/m/752-7525554_bahria-university-islamabad-logo-hd-png-download.png",
      name: "Bahria University",
      noOfcampus: 5,
      status: "Inctive"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/en/8/8d/SSUET_Logo.png",
      name: "Sir Syed University Of Engineering And Technology",
      noOfcampus: 2,
      status: "Inactive"
    }
  ] 

  return (
    <>

    <h3 className='heading'>Institute List: </h3>

    <table className="table table-dark table-hover">

      <thead>
        <tr>
          {
            tableFields.map((field, idx) => {
              return (
                <>
                <th key={idx} scope="col">{field}</th>
                </>
              )
            })
          }
        </tr>
    </thead>
    <tbody>

      {
        instituteData.map((inst, index) => {
          return (
            <>
          <tr key={index}>
            <th scope="row">{index+1}</th>
            <td><img src={inst.logo} className="table-img"/></td>
            <td>{inst.name}</td>
            <td>{inst.noOfcampus}</td>
            <td>{inst.status}</td>

          </tr>
            </>
          )
        }) 
      }
    </tbody>

    </table>

    </>
  )
}
