import React from "react";

// import { WakaTimeClient } from "wakatime-client";

const Wakatime: React.FC = () => {
  // Fetch Wakatime details
  const WAKA_API = "waka_2c088d26-e362-4ba6-9b09-c3725014f45d";

  //   const client = new WakaTimeClient();

  return (
    <section className="Wakatime">
      <div className="figure">
        <figure>
          <embed src="https://wakatime.com/share/@dev_okore/cae6de7c-b9e0-4f7a-9d5b-1d242558b5ba.svg"></embed>
        </figure>
      </div>
      {/* <a href="https://wakatime.com">
        <img src="https://wakatime.com/share/@dev_okore/14d1a5c6-3e49-4aa6-8669-29598cf0648b.png" />
      </a> */}
    </section>
  );
};

export default Wakatime;

// const fetchDetails = async () => {

//     try {
//       const response = await fetch(
//         "https://wakatime.com/share/@dev_okore/0082e6c2-cae8-4d46-a0f5-ac832711003f.json",
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (!response.ok) {
//         return;
//       }
//       const data = await response.json();
//       console.log(data);
//     } catch (err) {
//       alert(err);
//     }
//   };

//   fetchDetails();
