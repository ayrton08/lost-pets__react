import { findById } from "../../../src/lib/findById";

const testResponseData = {
  id: 1,
  name: "cloe",
  raza: "caniche",
  pictureURL:
    "https://res.cloudinary.com/apx-m7-dwf/image/upload/v1659547808/hfs2j22oryawmv7ufaqs.jpg",
  lat: -26.798115546231962,
  lng: -55.01729357301643,
  state: "true",
  location: "Puerto Rico , Misiones",
  user_id: 3,
  createdAt: "2022-08-03T17:30:09.410Z",
  updatedAt: "2022-08-03T17:30:09.410Z",
  userId: null,
  email: "test@mail.com",
};

// const testFetch = vi.fn((url, options) => {
//   return new Promise((resolve, reject) => {
//     const testResponse = {
//       ok: true,
//       json() {
//         return new Promise((resolve, reject) => {
//           resolve(testResponseData);
//         });
//       },
//     };

//     resolve(testResponse);
//   });
// });
// vi.stubGlobal("fetch", testFetch);

describe("sendInfoPet()", () => {
  test("should send info", () => {});
});
