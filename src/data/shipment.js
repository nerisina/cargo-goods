const Shipments = [
    {
      id: "7c6124c8-8639-4ec7-bc21-4a772715659c",
      client: "Broko",
      origin: "Av de la Hispanidad, s/n, 28042 Madrid, Spain",
      destination: "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      mode: "Air",
      etd: "3/28/19",
      eta: "4/21/19",
      status: "Arrived"
    },
    {
      id: "04e04f30-8df0-4136-ad9a-9d63087e4c6c",
      client: "Speedy Groceries",
      origin: "Hugo Eckener Ring 60549 Frankfurt",
      destination: "Av de la Hispanidad, s/n, 28042 Madrid, Spain",
      mode: "Air",
      etd: "3/1/19",
      eta: "4/1/19",
      status: "In Transit"
    },
    {
      id: "e398991c-6ad6-4255-a656-5b00ed965b42",
      client: "Alarwi",
      origin: "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      destination: "10000 W O'Hare Ave, Chicago, IL 60666",
      mode: "Air",
      etd: "2/21/19",
      eta: "3/19/19",
      status: "In Transit"
    },
    {
      id: "214d9a7f-6eb3-4db3-80b9-66377f395309",
      client: "Speedy Groceries",
      origin: "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      destination: "10000 W O'Hare Ave, Chicago, IL 60666",
      mode: "Air",
      etd: "1/13/19",
      eta: "2/7/19",
      status: "Cancelled"
    },
    {
      id: "abe87d4c-31a0-4451-96eb-8a83974a76ba",
      client: "Speedy Groceries",
      origin: "201 Edgewater St, Staten Island, NY 10305",
      destination: "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      mode: "Air",
      etd: "2/10/19",
      eta: "3/6/19",
      status: "Arrived"
    },
    {
      id: "4dc909f8-a352-41e5-bca9-0bec9809109d",
      client: "Tesla",
      origin: "482 Pier T Ave, Long Beach, CA 90802",
      destination: "190 45 Stockholm-Arlanda, Sweden",
      mode: "Air",
      etd: "4/21/19",
      eta: "5/23/19",
      status: "Customs Hold"
    },
    {
      id: "40aaaad9-aaa4-4bf4-bd49-622ecbde2bec",
      client: "Microsoft",
      origin: "New Udaan Bhawan, New Delhi 110037, INDIA",
      destination: "7-4 Deptford Rd, Singapore 759657",
      mode: "Air",
      etd: "2/8/19",
      eta: "3/9/19",
      status: "Arrived"
    },
    {
      id: "8374793c-ca76-41db-bf17-ab1d689d809c",
      client: "Microsoft",
      origin: "95700 Roissy-en-France, France",
      destination: "201 Edgewater St, Staten Island, NY 10305",
      mode: "Air",
      etd: "2/26/19",
      eta: "3/28/19",
      status: "TransportError"
    },
    {
      id: "24005ed1-4f7d-4507-96b1-0f08b7898bbc",
      client: "Tesla",
      origin: "Victoria Harbour 維多利亞港 Hong Kong",
      destination: "1 Jones Rd, Kempton Park, Johannesburg, 1632, South Africa",
      mode: "Air",
      etd: "3/21/19",
      eta: "4/12/19",
      status: "Arrived"
    },
    {
      id: "100805a1-da91-4f90-9b59-42a85873cd65",
      client: "Tesla",
      origin: "7-4 Deptford Rd, Singapore 759657",
      destination: "95700 Roissy-en-France, France",
      mode: "Air",
      etd: "3/30/19",
      eta: "4/28/19",
      status: "TransportError"
    },
    {
      id: "749d48ec-1b5e-4d7f-b30e-37df9747a20d",
      client: "The Pike Brewing Company",
      origin: "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      destination: "New Udaan Bhawan, New Delhi 110037, INDIA",
      mode: "Air",
      etd: "3/25/19",
      eta: "4/21/19",
      status: "In Transit"
    },
    {
      id: "a51bb5b6-60a0-45da-96db-d123ebe43cd1",
      client: "Sapphire Running",
      origin: "6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada",
      destination: "7-4 Deptford Rd, Singapore 759657",
      mode: "Air",
      etd: "2/21/19",
      eta: "3/15/19",
      status: "In Transit"
    },
    {
      id: "4d3bdfb8-284d-4f78-8d9e-5220c7033f62",
      client: "Speedy Groceries",
      origin: "Port of Los Angeles Los Angeles, CA",
      destination: "482 Pier T Ave, Long Beach, CA 90802",
      mode: "Air",
      etd: "2/16/19",
      eta: "3/12/19",
      status: "In Transit"
    },
    {
      id: "4aff66d5-0a46-4d04-b3ef-e901848f1624",
      client: "Dendreon Pharmaceutical LLC",
      origin: "6000 N Terminal Pkwy, Atlanta, GA 30320",
      destination: "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      mode: "Air",
      etd: "2/27/19",
      eta: "3/30/19",
      status: "TransportError"
    },
    {
      id: "ee2b7e8c-9313-45b8-b16d-8ab29ff9bf98",
      client: "Tesla",
      origin: "482 Pier T Ave, Long Beach, CA 90802",
      destination: "7-4 Deptford Rd, Singapore 759657",
      mode: "Air",
      etd: "3/28/19",
      eta: "4/24/19",
      status: "TransportError"
    },
    {
      id: "a427c559-4732-4877-90a8-e14774995af7",
      client: "Speedy Groceries",
      origin: "482 Pier T Ave, Long Beach, CA 90802",
      destination: "New Udaan Bhawan, New Delhi 110037, INDIA",
      mode: "Air",
      etd: "2/19/19",
      eta: "3/13/19",
      status: "TransportError"
    },
    {
      id: "35410f3b-bf7f-470d-aecf-c03c908588a1",
      client: "Broko",
      origin: "201 Edgewater St, Staten Island, NY 10305",
      destination: "Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND",
      mode: "Air",
      etd: "1/23/19",
      eta: "2/14/19",
      status: "Roll-Over"
    },
    {
      id: "274b2233-02f5-4c71-b6ff-1e40b38d270b",
      client: "Broko",
      origin: "190 45 Stockholm-Arlanda, Sweden",
      destination: "Av de la Hispanidad, s/n, 28042 Madrid, Spain",
      mode: "Air",
      etd: "4/2/19",
      eta: "4/25/19",
      status: "TransportError"
    },
    {
      id: "8d768286-ce6c-4ae7-957e-ba5ecf1bb1d5",
      client: "REI Seattle Flagship Store",
      origin: "6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada",
      destination: "Lufthavnsboulevarden 6, 2770 Kastrup, Denmark",
      mode: "Air",
      etd: "3/29/19",
      eta: "4/20/19",
      status: "In Transit"
    },
    {
      id: "7480f9c2-3cb0-4719-a63a-ea4655c58c94",
      client: "Alarwi",
      origin: "201 Edgewater St, Staten Island, NY 10305",
      destination: "Edvard Munchs veg, 2061 Gardermoen, Norway",
      mode: "Air",
      etd: "1/13/19",
      eta: "2/7/19",
      status: "Cancelled"
    },
    {
      id: "be8b2b5a-a6b0-4f1f-be29-52e41fc704d8",
      client: "Alarwi",
      origin: "1 Jones Rd, Kempton Park, Johannesburg, 1632, South Africa",
      destination: "10000 W O'Hare Ave, Chicago, IL 60666",
      mode: "Air",
      etd: "3/19/19",
      eta: "4/19/19",
      status: "Customs Hold"
    },
    {
      id: "69b362b3-a907-4e55-a561-4810c9aa32d7",
      client: "Microsoft",
      origin: "Port of Los Angeles Los Angeles, CA",
      destination: "190 45 Stockholm-Arlanda, Sweden",
      mode: "Air",
      etd: "4/19/19",
      eta: "5/13/19",
      status: "Customs Hold"
    },
    {
      id: "a9f06023-dfe0-4cf8-ac11-09d41b3035dd",
      client: "Broko",
      origin: "Edvard Munchs veg, 2061 Gardermoen, Norway",
      destination: "7-4 Deptford Rd, Singapore 759657",
      mode: "Air",
      etd: "3/20/19",
      eta: "4/12/19",
      status: "In Transit"
    },
    {
      id: "e4649791-eb60-4a2d-926c-b7e77301cfc3",
      client: "Sapphire Running",
      origin: "201 Edgewater St, Staten Island, NY 10305",
      destination: "95700 Roissy-en-France, France",
      mode: "Air",
      etd: "1/30/19",
      eta: "2/26/19",
      status: "Cancelled"
    },
    {
      id: "8ec3ce24-67fc-4916-aa3d-adb9650cc769",
      client: "The Pike Brewing Company",
      origin: "482 Pier T Ave, Long Beach, CA 90802",
      destination: "Port of Los Angeles Los Angeles, CA",
      mode: "Air",
      etd: "4/28/19",
      eta: "5/19/19",
      status: "TransportError"
    },
    {
      id: "1e68ef95-a71b-419c-a201-1060ab0e6802",
      client: "REI Seattle Flagship Store",
      origin: "Av de la Hispanidad, s/n, 28042 Madrid, Spain",
      destination: "New Udaan Bhawan, New Delhi 110037, INDIA",
      mode: "Air",
      etd: "1/12/19",
      eta: "2/6/19",
      status: "Cancelled"
    },
    {
      id: "8156b3ef-7bf3-48e1-9d02-7054de091358",
      client: "Sapphire Running",
      origin: "Hugo Eckener Ring 60549 Frankfurt",
      destination: "6000 N Terminal Pkwy, Atlanta, GA 30320",
      mode: "Air",
      etd: "2/20/19",
      eta: "3/24/19",
      status: "In Transit"
    },
    {
      id: "e6098094-a0e5-40b1-ac6b-3688e64a88ce",
      client: "Sapphire Running",
      origin: "482 Pier T Ave, Long Beach, CA 90802",
      destination: "Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND",
      mode: "Air",
      etd: "4/9/19",
      eta: "5/5/19",
      status: "In Transit"
    },
    {
      id: "b4cf758a-f696-4a13-a68d-065911f9933d",
      client: "Sapphire Running",
      origin: "New Udaan Bhawan, New Delhi 110037, INDIA",
      destination: "Port of Los Angeles Los Angeles, CA",
      mode: "Air",
      etd: "2/3/19",
      eta: "3/3/19",
      status: "Customs Hold"
    },
    {
      id: "c998e634-135e-4d2d-84f5-3ca89a9fcb66",
      client: "Microsoft",
      origin: "New Udaan Bhawan, New Delhi 110037, INDIA",
      destination: "Hugo Eckener Ring 60549 Frankfurt",
      mode: "Air",
      etd: "3/5/19",
      eta: "4/3/19",
      status: "Customs Hold"
    },
    {
      id: "da9e36cb-4175-446b-97e7-8bdc8d6dbfc8",
      client: "Broko",
      origin: "Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND",
      destination: "190 45 Stockholm-Arlanda, Sweden",
      mode: "Rail",
      etd: "4/19/19",
      eta: "5/21/19",
      status: "Arrived"
    },
    {
      id: "b0ed72fa-05f5-4128-ac94-064577d6fc8d",
      client: "REI Seattle Flagship Store",
      origin: "6000 N Terminal Pkwy, Atlanta, GA 30320",
      destination: "Port of Los Angeles Los Angeles, CA",
      mode: "Rail",
      etd: "4/24/19",
      eta: "5/25/19",
      status: "In Transit"
    },
    {
      id: "5c697cb3-8acd-423c-b815-5e3d6dc1c7b4",
      client: "Alarwi",
      origin: "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      destination: "7-4 Deptford Rd, Singapore 759657",
      mode: "Rail",
      etd: "1/24/19",
      eta: "2/21/19",
      status: "Roll-Over"
    },
    {
      id: "cbb3c448-6fff-46bd-bacf-0afea03f38b3",
      client: "Microsoft",
      origin: "Av de la Hispanidad, s/n, 28042 Madrid, Spain",
      destination: "Lufthavnsboulevarden 6, 2770 Kastrup, Denmark",
      mode: "Rail",
      etd: "4/13/19",
      eta: "5/7/19",
      status: "Arrived"
    },
    {
      id: "d9be1e99-1874-4ffe-8318-bd9de6bd3376",
      client: "The Pike Brewing Company",
      origin: "6000 N Terminal Pkwy, Atlanta, GA 30320",
      destination: "Victoria Harbour 維多利亞港 Hong Kong",
      mode: "Rail",
      etd: "4/11/19",
      eta: "5/12/19",
      status: "Arrived"
    },
    {
      id: "52a453b2-015d-44c2-a165-87d1f3e04315",
      client: "Dendreon Pharmaceutical LLC",
      origin: "Port of Los Angeles Los Angeles, CA",
      destination: "10000 W O'Hare Ave, Chicago, IL 60666",
      mode: "Rail",
      etd: "2/27/19",
      eta: "3/25/19",
      status: "Arrived"
    },
    {
      id: "c89ba29b-a6fe-4c48-a15e-b048e60cba39",
      client: "Microsoft",
      origin: "New Udaan Bhawan, New Delhi 110037, INDIA",
      destination: "7-4 Deptford Rd, Singapore 759657",
      mode: "Rail",
      etd: "3/30/19",
      eta: "4/30/19",
      status: "Arrived"
    },
    {
      id: "fba22064-0dea-4154-b664-cbf6f5585f7e",
      client: "REI Seattle Flagship Store",
      origin: "6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada",
      destination: "190 45 Stockholm-Arlanda, Sweden",
      mode: "Rail",
      etd: "4/24/19",
      eta: "5/20/19",
      status: "In Transit"
    },
    {
      id: "94a1ebe1-cdaf-4daa-87e4-4268a314e499",
      client: "REI Seattle Flagship Store",
      origin: "Victoria Harbour 維多利亞港 Hong Kong",
      destination: "Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND",
      mode: "Rail",
      etd: "4/10/19",
      eta: "5/1/19",
      status: "Arrived"
    },
    {
      id: "f33ac566-b1a7-4376-b8e2-0c17ab4c08e2",
      client: "REI Seattle Flagship Store",
      origin: "Edvard Munchs veg, 2061 Gardermoen, Norway",
      destination: "6000 N Terminal Pkwy, Atlanta, GA 30320",
      mode: "Rail",
      etd: "3/21/19",
      eta: "4/12/19",
      status: "Arrived"
    },
    {
      id: "c36dabe7-2154-47af-8509-8998fae7e916",
      client: "Microsoft",
      origin: "Victoria Harbour 維多利亞港 Hong Kong",
      destination: "Lufthavnsboulevarden 6, 2770 Kastrup, Denmark",
      mode: "Rail",
      etd: "3/8/19",
      eta: "4/6/19",
      status: "TransportError"
    },
    {
      id: "c8e0226b-1f16-48f6-98c9-1950064927e9",
      client: "REI Seattle Flagship Store",
      origin: "7-4 Deptford Rd, Singapore 759657",
      destination: "Edvard Munchs veg, 2061 Gardermoen, Norway",
      mode: "Rail",
      etd: "4/18/19",
      eta: "5/11/19",
      status: "Customs Hold"
    },
    {
      id: "b2ed5015-ab36-4451-b636-0032175ecb6e",
      client: "Avalyn Pharma",
      origin: "Lufthavnsboulevarden 6, 2770 Kastrup, Denmark",
      destination: "482 Pier T Ave, Long Beach, CA 90802",
      mode: "Rail",
      etd: "1/19/19",
      eta: "2/9/19",
      status: "Roll-Over"
    },
    {
      id: "02cdd662-f431-40cc-b0c2-fc37f4eb7bd0",
      client: "Broko",
      origin: "6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada",
      destination: "Port of Los Angeles Los Angeles, CA",
      mode: "Rail",
      etd: "4/14/19",
      eta: "5/14/19",
      status: "Customs Hold"
    },
    {
      id: "ab4ac47f-2f5f-4e31-bda3-eda8464de292",
      client: "Tesla",
      origin: "Edvard Munchs veg, 2061 Gardermoen, Norway",
      destination: "Port of Los Angeles Los Angeles, CA",
      mode: "Rail",
      etd: "3/11/19",
      eta: "4/9/19",
      status: "Arrived"
    },
    {
      id: "65257e3d-64ca-4107-abff-5168eceb4f17",
      client: "Speedy Groceries",
      origin: "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      destination: "1 Jones Rd, Kempton Park, Johannesburg, 1632, South Africa",
      mode: "Rail",
      etd: "1/19/19",
      eta: "2/13/19",
      status: "Roll-Over"
    },
    {
      id: "e15bc5ea-8247-4c17-8315-ff0e50b786f1",
      client: "Tesla",
      origin: "Hugo Eckener Ring 60549 Frankfurt",
      destination: "Av de la Hispanidad, s/n, 28042 Madrid, Spain",
      mode: "Rail",
      etd: "1/11/19",
      eta: "2/4/19",
      status: "Cancelled"
    },
    {
      id: "b604096f-0486-448a-a68e-36a8cc27a0cb",
      client: "Alarwi",
      origin: "New Udaan Bhawan, New Delhi 110037, INDIA",
      destination: "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      mode: "Rail",
      etd: "3/18/19",
      eta: "4/12/19",
      status: "In Transit"
    },
    {
      id: "5b6c35de-9257-4bc5-b0bc-1708360188d3",
      client: "Microsoft",
      origin: "6000 N Terminal Pkwy, Atlanta, GA 30320",
      destination: "201 Edgewater St, Staten Island, NY 10305",
      mode: "Rail",
      etd: "1/29/19",
      eta: "2/28/19",
      status: "Cancelled"
    },
    {
      id: "b0cbf90d-8873-483b-935a-ad5097f23f7f",
      client: "Dendreon Pharmaceutical LLC",
      origin: "Victoria Harbour 維多利亞港 Hong Kong",
      destination: "95700 Roissy-en-France, France",
      mode: "Rail",
      etd: "3/29/19",
      eta: "4/28/19",
      status: "Customs Hold"
    },
    {
      id: "116a0ad9-87f3-4f7b-b51e-507df83d25dd",
      client: "Broko",
      origin: "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      destination: "Victoria Harbour 維多利亞港 Hong Kong",
      mode: "Rail",
      etd: "1/7/19",
      eta: "2/5/19",
      status: "Cancelled"
    },
    {
      id: "b3e6c18b-bc23-4174-aa02-22361b2444c5",
      client: "Microsoft",
      origin: "6000 N Terminal Pkwy, Atlanta, GA 30320",
      destination: "Victoria Harbour 維多利亞港 Hong Kong",
      mode: "Rail",
      etd: "4/25/19",
      eta: "5/23/19",
      status: "Customs Hold"
    },
    {
      id: "0a54979c-78a9-4c36-81c6-c4580568917c",
      client: "Tesla",
      origin: "Hugo Eckener Ring 60549 Frankfurt",
      destination: "6000 N Terminal Pkwy, Atlanta, GA 30320",
      mode: "Rail",
      etd: "1/1/19",
      eta: "1/22/19",
      status: "Cancelled"
    },
    {
      id: "85eeffee-85d9-4d5a-b6fa-ee9204df71af",
      client: "Sapphire Running",
      origin: "6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada",
      destination: "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      mode: "Rail",
      etd: "1/2/19",
      eta: "2/1/19",
      status: "Cancelled"
    },
    {
      id: "95b789af-9146-435d-b60a-c88fd3a530f4",
      client: "Alarwi",
      origin: "Hugo Eckener Ring 60549 Frankfurt",
      destination: "482 Pier T Ave, Long Beach, CA 90802",
      mode: "Rail",
      etd: "1/20/19",
      eta: "2/19/19",
      status: "Roll-Over"
    },
    {
      id: "fdb88cb2-4f41-4fa6-8813-51589d58214a",
      client: "Alarwi",
      origin: "Edvard Munchs veg, 2061 Gardermoen, Norway",
      destination: "Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND",
      mode: "Rail",
      etd: "1/18/19",
      eta: "2/18/19",
      status: "Roll-Over"
    },
    {
      id: "64e7d2a2-b475-4d03-a8f2-22cd73e547f4",
      client: "Alarwi",
      origin: "New Udaan Bhawan, New Delhi 110037, INDIA",
      destination: "Hugo Eckener Ring 60549 Frankfurt",
      mode: "Rail",
      etd: "2/24/19",
      eta: "3/22/19",
      status: "Customs Hold"
    },
    {
      id: "d2e113f3-28c0-43d4-bcb0-10c2452d1ba2",
      client: "Dendreon Pharmaceutical LLC",
      origin: "7-4 Deptford Rd, Singapore 759657",
      destination: "201 Edgewater St, Staten Island, NY 10305",
      mode: "Rail",
      etd: "4/12/19",
      eta: "5/12/19",
      status: "In Transit"
    },
    {
      id: "7143e11d-5809-4415-948b-8b4a3e4595ec",
      client: "The Pike Brewing Company",
      origin: "Victoria Harbour 維多利亞港 Hong Kong",
      destination: "New Udaan Bhawan, New Delhi 110037, INDIA",
      mode: "Rail",
      etd: "2/15/19",
      eta: "3/17/19",
      status: "Customs Hold"
    },
    {
      id: "83c3d141-704a-4e96-a434-375c6bee8592",
      client: "Speedy Groceries",
      origin: "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      destination: "6000 N Terminal Pkwy, Atlanta, GA 30320",
      mode: "Rail",
      etd: "1/30/19",
      eta: "2/26/19",
      status: "Roll-Over"
    },
    {
      id: "75c3e661-6466-44a2-ab09-d1dda1e4ecad",
      client: "Avalyn Pharma",
      origin: "Lufthavnsboulevarden 6, 2770 Kastrup, Denmark",
      destination: "10000 W O'Hare Ave, Chicago, IL 60666",
      mode: "Rail",
      etd: "2/10/19",
      eta: "3/6/19",
      status: "TransportError"
    },
    {
      id: "cc18917d-bea7-4567-88da-532c8b46177c",
      client: "The Pike Brewing Company",
      origin: "6000 N Terminal Pkwy, Atlanta, GA 30320",
      destination: "201 Edgewater St, Staten Island, NY 10305",
      mode: "Rail",
      etd: "1/12/19",
      eta: "2/2/19",
      status: "Cancelled"
    },
    {
      id: "64734e7c-2f10-4a25-ace8-2bdf2d7cca47",
      client: "Microsoft",
      origin: "95700 Roissy-en-France, France",
      destination: "Av de la Hispanidad, s/n, 28042 Madrid, Spain",
      mode: "Rail",
      etd: "3/2/19",
      eta: "4/2/19",
      status: "In Transit"
    },
    {
      id: "ac4888ee-7e32-4beb-ae01-80ee16322165",
      client: "Sapphire Running",
      origin: "482 Pier T Ave, Long Beach, CA 90802",
      destination: "10000 W O'Hare Ave, Chicago, IL 60666",
      mode: "Rail",
      etd: "1/22/19",
      eta: "2/17/19",
      status: "Roll-Over"
    },
    {
      id: "9ac88e9d-3f68-488b-ad97-e4595680a260",
      client: "Dendreon Pharmaceutical LLC",
      origin: "Port of Los Angeles Los Angeles, CA",
      destination: "6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada",
      mode: "Rail",
      etd: "1/22/19",
      eta: "2/19/19",
      status: "Roll-Over"
    },
    {
      id: "438eefdf-95c2-47e6-b539-0ab2ba76aea6",
      client: "Microsoft",
      origin: "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      destination: "Hugo Eckener Ring 60549 Frankfurt",
      mode: "Rail",
      etd: "1/7/19",
      eta: "2/7/19",
      status: "Cancelled"
    },
    {
      id: "8493d235-4d7b-4f5c-9459-fa87398207ae",
      client: "Avalyn Pharma",
      origin: "New Udaan Bhawan, New Delhi 110037, INDIA",
      destination: "7-4 Deptford Rd, Singapore 759657",
      mode: "Rail",
      etd: "4/9/19",
      eta: "5/11/19",
      status: "Customs Hold"
    },
    {
      id: "938ba7e8-5632-4c10-bd8a-563e6d1d937f",
      client: "Dendreon Pharmaceutical LLC",
      origin: "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      destination: "Victoria Harbour 維多利亞港 Hong Kong",
      mode: "Rail",
      etd: "1/29/19",
      eta: "2/26/19",
      status: "Cancelled"
    },
    {
      id: "d0e70f89-afc0-4889-a050-c8dca4b11cbc",
      client: "Alarwi",
      origin: "Edvard Munchs veg, 2061 Gardermoen, Norway",
      destination: "Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND",
      mode: "Rail",
      etd: "1/11/19",
      eta: "2/5/19",
      status: "Cancelled"
    },
    {
      id: "1575c496-6a2d-41dc-996f-9c3bbcb88037",
      client: "Broko",
      origin: "10000 W O'Hare Ave, Chicago, IL 60666",
      destination: "7-4 Deptford Rd, Singapore 759657",
      mode: "Rail",
      etd: "4/16/19",
      eta: "5/7/19",
      status: "In Transit"
    },
    {
      id: "371cbd15-0d0d-49f8-863a-8333e94c2f35",
      client: "Broko",
      origin: "New Udaan Bhawan, New Delhi 110037, INDIA",
      destination: "95700 Roissy-en-France, France",
      mode: "Rail",
      etd: "4/13/19",
      eta: "5/10/19",
      status: "In Transit"
    },
    {
      id: "a0d5c2b2-74b8-4915-8488-45b64ad72144",
      client: "Broko",
      origin: "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      destination: "New Udaan Bhawan, New Delhi 110037, INDIA",
      mode: "Rail",
      etd: "2/24/19",
      eta: "3/18/19",
      status: "In Transit"
    },
    {
      id: "3ce5d35a-a09a-4b7e-8dbf-2fdf20621c76",
      client: "Broko",
      origin: "Hugo Eckener Ring 60549 Frankfurt",
      destination: "Victoria Harbour 維多利亞港 Hong Kong",
      mode: "Rail",
      etd: "3/25/19",
      eta: "4/23/19",
      status: "In Transit"
    },
    {
      id: "d1ebd3e8-2b71-4604-bbb9-c9050ded8852",
      client: "REI Seattle Flagship Store",
      origin: "Hugo Eckener Ring 60549 Frankfurt",
      destination: "6000 N Terminal Pkwy, Atlanta, GA 30320",
      mode: "Rail",
      etd: "3/26/19",
      eta: "4/21/19",
      status: "Customs Hold"
    },
    {
      id: "65fb5e79-c9a4-43eb-86b1-0424f8088f52",
      client: "The Pike Brewing Company",
      origin: "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      destination: "482 Pier T Ave, Long Beach, CA 90802",
      mode: "Rail",
      etd: "2/21/19",
      eta: "3/15/19",
      status: "Customs Hold"
    },
    {
      id: "574bb6f8-4bf6-4e60-9e41-e596c197e4e0",
      client: "The Pike Brewing Company",
      origin: "6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada",
      destination: "482 Pier T Ave, Long Beach, CA 90802",
      mode: "Sea",
      etd: "2/10/19",
      eta: "3/7/19",
      status: "TransportError"
    },
    {
      id: "d8525b5d-057c-4724-9901-45d6d10be100",
      client: "The Pike Brewing Company",
      origin: "Hugo Eckener Ring 60549 Frankfurt",
      destination: "482 Pier T Ave, Long Beach, CA 90802",
      mode: "Sea",
      etd: "3/15/19",
      eta: "4/16/19",
      status: "TransportError"
    },
    {
      id: "400a67dd-b0ef-48f0-8b6f-d7bec3ed2123",
      client: "Broko",
      origin: "Av de la Hispanidad, s/n, 28042 Madrid, Spain",
      destination: "95700 Roissy-en-France, France",
      mode: "Sea",
      etd: "4/25/19",
      eta: "5/26/19",
      status: "Arrived"
    },
    {
      id: "6e5ade3a-fd7b-4f8b-b33d-f6d81dfb5440",
      client: "The Pike Brewing Company",
      origin: "190 45 Stockholm-Arlanda, Sweden",
      destination: "New Udaan Bhawan, New Delhi 110037, INDIA",
      mode: "Sea",
      etd: "3/22/19",
      eta: "4/15/19",
      status: "Arrived"
    },
    {
      id: "44e4a277-38b5-4a00-908b-cb45c51a4de2",
      client: "Microsoft",
      origin: "1 Jones Rd, Kempton Park, Johannesburg, 1632, South Africa",
      destination: "482 Pier T Ave, Long Beach, CA 90802",
      mode: "Sea",
      etd: "2/17/19",
      eta: "3/18/19",
      status: "In Transit"
    },
    {
      id: "5aa199f0-9761-450f-aa23-4e991b9002db",
      client: "Sapphire Running",
      origin: "7-4 Deptford Rd, Singapore 759657",
      destination: "Port of Los Angeles Los Angeles, CA",
      mode: "Sea",
      etd: "4/27/19",
      eta: "5/27/19",
      status: "Arrived"
    },
    {
      id: "b1c64f27-ada8-4187-bb98-9f454c90eac4",
      client: "Microsoft",
      origin: "190 45 Stockholm-Arlanda, Sweden",
      destination: "Victoria Harbour 維多利亞港 Hong Kong",
      mode: "Sea",
      etd: "1/26/19",
      eta: "2/16/19",
      status: "Roll-Over"
    },
    {
      id: "90b2a047-a7f3-4b03-8a97-ae22baa4a141",
      client: "Alarwi",
      origin: "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      destination: "6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada",
      mode: "Sea",
      etd: "4/24/19",
      eta: "5/16/19",
      status: "In Transit"
    },
    {
      id: "18db48d1-c13e-44b3-a778-714c0b7e215f",
      client: "Alarwi",
      origin: "6000 N Terminal Pkwy, Atlanta, GA 30320",
      destination: "Edvard Munchs veg, 2061 Gardermoen, Norway",
      mode: "Sea",
      etd: "1/12/19",
      eta: "2/12/19",
      status: "Roll-Over"
    },
    {
      id: "f973d590-6058-4502-8091-7b7956d2f2b9",
      client: "Speedy Groceries",
      origin: "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      destination: "190 45 Stockholm-Arlanda, Sweden",
      mode: "Sea",
      etd: "4/4/19",
      eta: "4/25/19",
      status: "Customs Hold"
    },
    {
      id: "e4cd3935-7263-4e00-bf3d-aa1600aed229",
      client: "Microsoft",
      origin: "Victoria Harbour 維多利亞港 Hong Kong",
      destination: "190 45 Stockholm-Arlanda, Sweden",
      mode: "Sea",
      etd: "1/28/19",
      eta: "2/19/19",
      status: "Roll-Over"
    },
    {
      id: "c858289b-1dc8-45b3-b037-f5bb9869cae8",
      client: "Alarwi",
      origin: "95700 Roissy-en-France, France",
      destination: "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      mode: "Sea",
      etd: "3/12/19",
      eta: "4/5/19",
      status: "Arrived"
    },
    {
      id: "996c3eb9-defe-4134-a177-6cfe9c747c13",
      client: "Alarwi",
      origin: "Edvard Munchs veg, 2061 Gardermoen, Norway",
      destination: "Hugo Eckener Ring 60549 Frankfurt",
      mode: "Sea",
      etd: "4/12/19",
      eta: "5/8/19",
      status: "Customs Hold"
    },
    {
      id: "dd17312a-675a-40c5-9363-2a198cc1d450",
      client: "Broko",
      origin: "190 45 Stockholm-Arlanda, Sweden",
      destination: "1 Jones Rd, Kempton Park, Johannesburg, 1632, South Africa",
      mode: "Sea",
      etd: "3/4/19",
      eta: "3/26/19",
      status: "In Transit"
    },
    {
      id: "6a58d75b-a3e8-456b-b719-78f4896069a2",
      client: "Broko",
      origin: "10000 W O'Hare Ave, Chicago, IL 60666",
      destination: "6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada",
      mode: "Sea",
      etd: "3/30/19",
      eta: "5/1/19",
      status: "In Transit"
    },
    {
      id: "2001041f-2689-4f56-9175-de1a38d2bce2",
      client: "Sapphire Running",
      origin: "Victoria Harbour 維多利亞港 Hong Kong",
      destination: "Port of Los Angeles Los Angeles, CA",
      mode: "Sea",
      etd: "3/24/19",
      eta: "4/21/19",
      status: "Arrived"
    },
    {
      id: "8147722e-738a-461c-b74e-7d01da95964e",
      client: "Alarwi",
      origin: "95700 Roissy-en-France, France",
      destination: "Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND",
      mode: "Sea",
      etd: "3/27/19",
      eta: "4/18/19",
      status: "In Transit"
    },
    {
      id: "9097d72c-4b18-4b56-a495-0afe9dcba9e5",
      client: "Tesla",
      origin: "Lufthavnsboulevarden 6, 2770 Kastrup, Denmark",
      destination: "190 45 Stockholm-Arlanda, Sweden",
      mode: "Sea",
      etd: "4/20/19",
      eta: "5/18/19",
      status: "Customs Hold"
    },
    {
      id: "1ac1a805-41cb-46a5-96e4-819a147c4f60",
      client: "Alarwi",
      origin: "Hugo Eckener Ring 60549 Frankfurt",
      destination: "7-4 Deptford Rd, Singapore 759657",
      mode: "Sea",
      etd: "1/18/19",
      eta: "2/9/19",
      status: "Roll-Over"
    },
    {
      id: "df0b0ce5-8bf8-415c-ba40-1f6a7d04bbd6",
      client: "Speedy Groceries",
      origin: "Victoria Harbour 維多利亞港 Hong Kong",
      destination: "95700 Roissy-en-France, France",
      mode: "Sea",
      etd: "3/1/19",
      eta: "4/1/19",
      status: "In Transit"
    },
    {
      id: "76f2fe67-9eea-45e9-b34e-e4a2ef32cce5",
      client: "Microsoft",
      origin: "95700 Roissy-en-France, France",
      destination: "201 Edgewater St, Staten Island, NY 10305",
      mode: "Sea",
      etd: "2/1/19",
      eta: "2/28/19",
      status: "Cancelled"
    },
    {
      id: "33f7028c-ad20-46ae-92e2-a2a9fea74cd2",
      client: "Sapphire Running",
      origin: "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      destination: "Lufthavnsboulevarden 6, 2770 Kastrup, Denmark",
      mode: "Sea",
      etd: "1/6/19",
      eta: "2/5/19",
      status: "Cancelled"
    },
    {
      id: "9e37d9ec-88c5-4faa-8291-553d6efc72f6",
      client: "Alarwi",
      origin: "6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada",
      destination: "190 45 Stockholm-Arlanda, Sweden",
      mode: "Sea",
      etd: "3/26/19",
      eta: "4/19/19",
      status: "Arrived"
    },
    {
      id: "132bfb78-13d3-4854-af53-a3cf85bb8a7f",
      client: "Avalyn Pharma",
      origin: "New Udaan Bhawan, New Delhi 110037, INDIA",
      destination: "Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND",
      mode: "Sea",
      etd: "3/23/19",
      eta: "4/24/19",
      status: "TransportError"
    },
    {
      id: "a5482222-a598-4cd2-8a8d-c416f9702741",
      client: "The Pike Brewing Company",
      origin: "Av de la Hispanidad, s/n, 28042 Madrid, Spain",
      destination: "6000 N Terminal Pkwy, Atlanta, GA 30320",
      mode: "Sea",
      etd: "4/15/19",
      eta: "5/14/19",
      status: "Customs Hold"
    }
  ];

  export default Shipments;