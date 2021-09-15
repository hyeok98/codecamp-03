import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";

export default function ModalAddressPrevPage() {
  const [myZipcode, setMyZipcode] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = (data) => {
    setMyZipcode(data.zonecode);
    setMyAddress(data.address);
    console.log(data.zonecode);
    console.log(data.address);

    setIsOpen((prev) => !prev);
  };

  function onToggleZipcode() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <button onClick={onToggleZipcode}>우편번호검색</button>
      {isOpen && (
        <Modal visible={true} onCancel={onToggleZipcode}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}

// import React from 'react';
// import DaumPostcode from 'react-daum-postcode';

// const Postcode = () => {
//   const handleComplete = (data) => {
//     let fullAddress = data.address;
//     let extraAddress = '';

//     if (data.addressType === 'R') {
//       if (data.bname !== '') {
//         extraAddress += data.bname;
//       }
//       if (data.buildingName !== '') {
//         extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
//       }
//       fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
//     }

//     console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
//   }

//   return (
//     <DaumPostcode
//       onComplete={handleComplete}
//       { ...props }
//     />
//   );
// }
