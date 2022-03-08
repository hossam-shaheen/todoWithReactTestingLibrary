import { screen, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import FollowersList from "./FollowersList"
import MockAdapter from "axios-mock-adapter";
import axios from "axios"

describe("Render followers list", () => {
    test("Followers items list", async () => {

        // fetch Approach
        // window.fetch = jest.fn();
        // window.fetch.mockResolvedValueOnce({
        //     json: async () => ({

        // "results": [
        //     {
        //         "gender": "male",
        //         "name": {
        //             "title": "Mr",
        //             "first": "Adib",
        //             "last": "Tolner"
        //         },
        //         "location": {
        //             "street": {
        //                 "number": 4767,
        //                 "name": "Brukelsestraat"
        //             },
        //             "city": "Súdwest-Fryslân",
        //             "state": "Friesland",
        //             "country": "Netherlands",
        //             "postcode": 20895,
        //             "coordinates": {
        //                 "latitude": "45.9892",
        //                 "longitude": "-136.6727"
        //             },
        //             "timezone": {
        //                 "offset": "+6:00",
        //                 "description": "Almaty, Dhaka, Colombo"
        //             }
        //         },
        //         "email": "adib.tolner@example.com",
        //         "login": {
        //             "uuid": "0bc73c21-c5d6-453a-ac89-fc0ae96488dd",
        //             "username": "lazylion977",
        //             "password": "screwy",
        //             "salt": "VuZyvnPO",
        //             "md5": "e8dd69ae5da302e457cc8266c15dc34d",
        //             "sha1": "2ec0d3fa6f56f1fb6235d9b3a83f128c07ab8638",
        //             "sha256": "09134e66ed0d5e13e9a8884711c9c91d454a62de298890fcc03d875797088fb8"
        //         },
        //         "dob": {
        //             "date": "1987-07-08T14:09:17.566Z",
        //             "age": 35
        //         },
        //         "registered": {
        //             "date": "2002-04-18T16:31:18.102Z",
        //             "age": 20
        //         },
        //         "phone": "(853)-255-8890",
        //         "cell": "(238)-416-3913",
        //         "id": {
        //             "name": "BSN",
        //             "value": "69742017"
        //         },
        //         "picture": {
        //             "large": "https://randomuser.me/api/portraits/men/67.jpg",
        //             "medium": "https://randomuser.me/api/portraits/med/men/67.jpg",
        //             "thumbnail": "https://randomuser.me/api/portraits/thumb/men/67.jpg"
        //         },
        //         "nat": "NL"
        //     }
        // ],
        // "info": {
        //     "seed": "dd4dc5fcd914520a",
        //     "results": 5,
        //     "page": 1,
        //     "version": "1.3"
        // }
        //     }
        //     )
        // })


        //Axios Approach

        const mock = new MockAdapter(axios);

        mock.onGet("https://randomuser.me/api/?results=5").reply(200, {
            "results": [
                {
                    "gender": "male",
                    "name": {
                        "title": "Mr",
                        "first": "Adib",
                        "last": "Tolner"
                    },
                    "location": {
                        "street": {
                            "number": 4767,
                            "name": "Brukelsestraat"
                        },
                        "city": "Súdwest-Fryslân",
                        "state": "Friesland",
                        "country": "Netherlands",
                        "postcode": 20895,
                        "coordinates": {
                            "latitude": "45.9892",
                            "longitude": "-136.6727"
                        },
                        "timezone": {
                            "offset": "+6:00",
                            "description": "Almaty, Dhaka, Colombo"
                        }
                    },
                    "email": "adib.tolner@example.com",
                    "login": {
                        "uuid": "0bc73c21-c5d6-453a-ac89-fc0ae96488dd",
                        "username": "lazylion977",
                        "password": "screwy",
                        "salt": "VuZyvnPO",
                        "md5": "e8dd69ae5da302e457cc8266c15dc34d",
                        "sha1": "2ec0d3fa6f56f1fb6235d9b3a83f128c07ab8638",
                        "sha256": "09134e66ed0d5e13e9a8884711c9c91d454a62de298890fcc03d875797088fb8"
                    },
                    "dob": {
                        "date": "1987-07-08T14:09:17.566Z",
                        "age": 35
                    },
                    "registered": {
                        "date": "2002-04-18T16:31:18.102Z",
                        "age": 20
                    },
                    "phone": "(853)-255-8890",
                    "cell": "(238)-416-3913",
                    "id": {
                        "name": "BSN",
                        "value": "69742017"
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/67.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/67.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/67.jpg"
                    },
                    "nat": "NL"
                }
            ],
            "info": {
                "seed": "dd4dc5fcd914520a",
                "results": 5,
                "page": 1,
                "version": "1.3"
            },
        });

        render(<BrowserRouter>
            <FollowersList />
        </BrowserRouter>);

        const listItems = await screen.findAllByRole("listitem");

        expect(listItems.length).not.toBe(0)

    })
})