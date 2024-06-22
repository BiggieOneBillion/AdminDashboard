import React from "react";
import { IoIosMore } from "react-icons/io";
import { AiOutlinePicture } from "react-icons/ai";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import MyDropdownMenu from "./TemplateDDM";
import { useQuery } from "@tanstack/react-query";
import { userStore } from "@/store/user";
import axios from "axios";
import { useParams } from "next/navigation";
import { clientStore } from "@/store/clients";
import Image from "next/image";

const Container = ({ children }) => (
  <div className="p-4 border w-[400px] rounded-lg flex flex-col gap-2 bg-whitey">
    {children}
  </div>
);

const TemplateCard = ({ data }) => {
  //   {
  //     "id": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //     "clientId": "888fe7dc-f762-479b-b301-83bc10f8a971",
  //     "screenSize": "10",
  //     "name": "credo",
  //     "delay": "12 hours",
  //     "order": "shuffle",
  //     "fileSize": "340 mb",
  //     "deletedAt": null,
  //     "createdAt": "2024-05-15T06:59:00.715Z",
  //     "updatedAt": "2024-05-15T06:59:00.715Z",
  //     "quotes": [
  //         {
  //             "id": "550ef869-eb51-4d07-b0dd-4c3b997afdb0",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Adopto tergum defungo fugit.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.757Z",
  //             "updatedAt": "2024-05-15T06:59:00.757Z"
  //         },
  //         {
  //             "id": "44472dc1-f897-40fd-895c-8533bb39353d",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Cumque cubitum ventito stipes corroboro vehemens spes.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.757Z",
  //             "updatedAt": "2024-05-15T06:59:00.757Z"
  //         },
  //         {
  //             "id": "35fe877f-e520-41c1-a839-8c169ae20239",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Approbo cohors vestigium theatrum deripio volo.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.757Z",
  //             "updatedAt": "2024-05-15T06:59:00.757Z"
  //         },
  //         {
  //             "id": "60ece025-2172-4972-9eef-a637e4c8cd04",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Perferendis eligendi totus acsi comis.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.757Z",
  //             "updatedAt": "2024-05-15T06:59:00.757Z"
  //         },
  //         {
  //             "id": "02e0705d-9220-4039-841a-2d4a09392be5",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Tantum consuasor atavus paulatim recusandae aperte asperiores sumptus.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.757Z",
  //             "updatedAt": "2024-05-15T06:59:00.757Z"
  //         },
  //         {
  //             "id": "8b3584d5-81bd-4180-aa48-43fdce75f3d0",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Undique capio audeo cubicularis culpo tristis ultra utpote absconditus.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.757Z",
  //             "updatedAt": "2024-05-15T06:59:00.757Z"
  //         },
  //         {
  //             "id": "c827a9a4-3844-4913-aaa1-e270197b4519",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Repellendus cruentus stipes trucido constans eius verbum ager compello.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.757Z",
  //             "updatedAt": "2024-05-15T06:59:00.757Z"
  //         },
  //         {
  //             "id": "da304401-c54f-4985-b145-4aa119c9bf98",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Cohibeo addo accusamus umquam aggero temeritas taceo adsum adsum demulceo.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.757Z",
  //             "updatedAt": "2024-05-15T06:59:00.757Z"
  //         },
  //         {
  //             "id": "1e78e9bb-b3f1-49ad-8cdb-3be0258b0a8d",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Corroboro ultra solvo veritas tamdiu patruus patria crepusculum alias defendo.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.757Z",
  //             "updatedAt": "2024-05-15T06:59:00.757Z"
  //         },
  //         {
  //             "id": "666838e7-30b4-4bfd-9440-452b91e57d98",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Speculum similique causa solitudo bestia ipsam sollicito ait varius certe.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.757Z",
  //             "updatedAt": "2024-05-15T06:59:00.757Z"
  //         },
  //         {
  //             "id": "24d05dac-71f1-4f2b-bbaf-f9c621d45e2e",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Arguo amplitudo inventore baiulus accusamus cado brevis.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "3287ddc3-b380-410e-bbbc-aa1c412e3003",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Conspergo tenetur speculum tardus clam suscipit caste.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "af336675-f039-4bdc-b630-5d961d6c3141",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Vicissitudo pecco cursim deporto victoria crapula sponte tripudio complectus sonitus.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "b7f578c3-3fce-4b1d-ac69-caeba4bcce7f",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Attollo degero valde alienus tergum reiciendis absconditus vilis thermae.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "49317ed4-fc89-4985-9a15-72c4a45d7b5e",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Caste delectus sortitus brevis apostolus adeo perferendis currus.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "7b51cca7-4182-4eec-a6e0-61d08f5a1c3d",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Demens considero valeo.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "93d3cbc5-2967-4390-a754-47101a937134",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Reprehenderit est confido tenuis cervus reiciendis adfero cimentarius demo.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "696e309c-29cc-47f0-90bb-7741581e9390",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Thesaurus tres aegre ulciscor traho attero vinco cognomen.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "a2accee6-c2b9-422a-abe2-ff38509ceab3",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Sophismata contra accusator.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "983f9544-0887-4fb4-a400-0e1ec45df155",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Ambulo ventosus statim.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "72211229-04b4-46cd-af1b-b019573d7693",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Apparatus utilis vehemens.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "4dfdb99b-edbd-48a1-8704-93dcaec8dfa1",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Turpis aliquam varius.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "a8a318d9-669e-49b9-bf4a-f0dcf253f00d",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Desolo fugit dapifer sequi.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "a16bf482-8a4b-40bc-bcc7-b1e3f33c64ef",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Perspiciatis balbus conforto beatus advoco cursus animi acidus adeo vigilo.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "376603a4-6d73-4696-bf7e-1d253bf48d86",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Delinquo absens addo adduco.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "e43e7cb9-23a3-401c-86f2-c23d4f006d04",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Vestrum ter comburo aqua amplus.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "1e6e69e9-11a7-4a80-9b21-a44a42e15823",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Averto pecto condico absconditus adulescens.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "6c7751af-d4b7-4624-8294-e914cefba8f9",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Demoror causa sequi viriliter iusto comptus creator clam animadverto.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "2f97e53b-e5c5-49b1-ac05-80b61acd512d",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Cohibeo comes patruus depereo tertius campana bardus.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "03af648e-a756-4823-a64b-3318f2bc5591",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Velit consequatur desolo venustas creator crur.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "b557c481-088d-42a3-b397-2dcecac5232e",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Reiciendis sapiente vergo armarium turba temperantia volo tracto carus turpis.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "12845f24-2355-4e3e-8831-7faff95b79b6",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Assentator sumo defluo beatus.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "cc3876d1-87bb-4294-abd4-11b13a27380e",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Molestias temporibus adimpleo facere strenuus vulariter decimus vos truculenter.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "c9a761dd-1d71-4499-a18e-99da5c30a2aa",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Adficio sum corporis tubineus tendo creta ea tamquam defero tres.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "7caabe60-d851-4401-9383-fd999ed051b4",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Magni aspicio adsum thema admoneo vito.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "5adcaa34-c76f-47e3-aee3-fc0b020080a2",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Placeat acer voluptatem veritatis cultellus celo.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "254ac4c5-6686-462d-a7c2-0cbbbf8cf872",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Cultura vinculum degenero custodia ambitus.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "9d76b556-5fd8-4cf7-9c8c-3883ccb8bdc2",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Pauper approbo adflicto.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "2ed6d96a-5fe3-4098-a780-bd98239a1a3c",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Crinis volo sonitus perspiciatis vulpes fuga tergiversatio ultio aureus.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "f9dcae8d-f95a-4db8-88d6-3cef9de5253f",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Vulgo compono cena tumultus absorbeo.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "6cfc7b95-0fe9-44a2-866f-515288167042",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Tum verus concedo texo auditor qui.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "e4de87e2-4ad7-4b66-9125-e737c9ae0216",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Tandem deludo utique terra cruentus thema.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "98dac57d-fd58-40da-9eb9-012996b0f828",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Sponte campana vitiosus conduco.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "e2f1ed9a-263b-43aa-8eee-0aa60435113d",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Tonsor deporto viridis sustineo artificiose.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "5204133f-5ae6-4400-a35c-8f45c04baab1",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Amita vetus cenaculum viriliter alias caput.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "4ec54834-a7f8-4328-818c-5f6f89009e9e",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Itaque volo conqueror suspendo demonstro civitas sollicito animadverto.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "0713a5ef-e81a-49f6-a34a-feb7d83a0d8e",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Comparo dedecor atavus.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "1e965510-9359-4ee4-92cc-cc1c92434db1",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Capto vitium amet adficio argumentum tendo similique urbs odit.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "db8ba21a-35f0-457e-b6ff-db3cacefdd91",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Succedo communis cur.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         },
  //         {
  //             "id": "ff4c0220-ae15-4ed2-b5bc-061d19e527f9",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "quote": "Quia coruscus ipsam ancilla ultio apto cognomen consuasor desipio.",
  //             "date": null,
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.758Z",
  //             "updatedAt": "2024-05-15T06:59:00.758Z"
  //         }
  //     ],
  //     "images": [
  //         {
  //             "id": "771069c7-8b4a-4cb2-b3d4-fd6f1ce06d39",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=3779021621952512",
  //             "title": "harum",
  //             "subtext": "Fugit ea tamdiu.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.737Z",
  //             "updatedAt": "2024-05-15T06:59:00.737Z"
  //         },
  //         {
  //             "id": "cca82f44-3455-4243-a499-258c27ff5f68",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=2447108848222208",
  //             "title": "aranea",
  //             "subtext": "Strues calcar somniculosus deserunt campana.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.737Z",
  //             "updatedAt": "2024-05-15T06:59:00.737Z"
  //         },
  //         {
  //             "id": "9113aa3b-8e15-4c0a-8f64-52cc5b929cfc",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/BuunYyRtx/640/480",
  //             "title": "viscus",
  //             "subtext": "Comptus timidus tremo stabilis quaerat tenetur.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.737Z",
  //             "updatedAt": "2024-05-15T06:59:00.737Z"
  //         },
  //         {
  //             "id": "5a8482b7-51f2-4885-bdf3-44bdc86f9212",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/oHXlSzRM/640/480",
  //             "title": "utrum",
  //             "subtext": "Benevolentia voluptatibus tutis.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.737Z",
  //             "updatedAt": "2024-05-15T06:59:00.737Z"
  //         },
  //         {
  //             "id": "90f044b4-8566-4d42-b28c-c9414d5d28f1",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=7957722098040832",
  //             "title": "quia",
  //             "subtext": "Ab audentia ademptio.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.737Z",
  //             "updatedAt": "2024-05-15T06:59:00.737Z"
  //         },
  //         {
  //             "id": "f349d375-989a-4ac0-b44a-f7658712d66c",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=6185039496740864",
  //             "title": "timidus",
  //             "subtext": "Delectus necessitatibus labore.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.737Z",
  //             "updatedAt": "2024-05-15T06:59:00.737Z"
  //         },
  //         {
  //             "id": "ca8e7c80-d667-4214-932c-476ad6c79ece",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=6489301982380032",
  //             "title": "vigilo",
  //             "subtext": "Desipio defero conqueror cribro animus comitatus voveo absorbeo.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.737Z",
  //             "updatedAt": "2024-05-15T06:59:00.737Z"
  //         },
  //         {
  //             "id": "feb569ad-5509-47f5-b39f-8d1c56d98070",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=6008587675500544",
  //             "title": "nemo",
  //             "subtext": "Decet vox catena asporto ustilo aeneus colo despecto.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.737Z",
  //             "updatedAt": "2024-05-15T06:59:00.737Z"
  //         },
  //         {
  //             "id": "bdd8c718-766f-4159-a835-9d6fb11d0b3a",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=6351972162600960",
  //             "title": "defendo",
  //             "subtext": "Theatrum thesaurus atavus adduco calamitas.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.737Z",
  //             "updatedAt": "2024-05-15T06:59:00.737Z"
  //         },
  //         {
  //             "id": "c47f82f0-59fd-4983-ad3a-860d5a212627",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=920198186008576",
  //             "title": "voluptate",
  //             "subtext": "Thesis sequi exercitationem subito vetus uredo laborum aptus.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.737Z",
  //             "updatedAt": "2024-05-15T06:59:00.737Z"
  //         },
  //         {
  //             "id": "d25eff2c-bd08-4308-9062-5f199a8aa3ed",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=234198155657216",
  //             "title": "peior",
  //             "subtext": "Demoror sopor vis.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.737Z",
  //             "updatedAt": "2024-05-15T06:59:00.737Z"
  //         },
  //         {
  //             "id": "b8292482-fce7-45ea-8d39-d889cc817383",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=2632238816559104",
  //             "title": "dens",
  //             "subtext": "Adopto catena cena animus coniuratio denego carus stips vito vomito.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.737Z",
  //             "updatedAt": "2024-05-15T06:59:00.737Z"
  //         },
  //         {
  //             "id": "4f7ac24e-aaff-4c45-a47f-87f3f80cb184",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/I9AlGfMCAB/640/480",
  //             "title": "quia",
  //             "subtext": "Clam verbum architecto deleniti.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.737Z",
  //             "updatedAt": "2024-05-15T06:59:00.737Z"
  //         },
  //         {
  //             "id": "adb061c5-1200-4520-a15f-cb7e161a640a",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/VsH0pQ/640/480",
  //             "title": "cura",
  //             "subtext": "Sonitus apparatus cursim adhuc spectaculum tero cena conservo commodi.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.737Z",
  //             "updatedAt": "2024-05-15T06:59:00.737Z"
  //         },
  //         {
  //             "id": "17e5046b-3bbf-4734-ad75-62339b5f640b",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/ziVkEGr/640/480",
  //             "title": "antiquus",
  //             "subtext": "Veritatis terror soleo curia.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.737Z",
  //             "updatedAt": "2024-05-15T06:59:00.737Z"
  //         },
  //         {
  //             "id": "87435201-51e2-4734-be27-e2f4d9c21af9",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=2256964507664384",
  //             "title": "talus",
  //             "subtext": "Conforto suus causa magnam.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "0e7f5e3f-0396-4a65-97ae-eaa8ce51e846",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=6019675022426112",
  //             "title": "tabernus",
  //             "subtext": "Solium coepi spargo paulatim pecus sunt eius labore corrumpo.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "d21e093b-52fa-410a-a60f-00830bfea34f",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/hMERVamn/640/480",
  //             "title": "averto",
  //             "subtext": "Arcesso vix apud dolorum aveho thalassinus taedium.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "074e1a30-6b29-4be1-8a03-094cd715cfe0",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/ziLZJWBnig/640/480",
  //             "title": "sperno",
  //             "subtext": "Certe tremo usque conspergo facilis ipsa.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "5f9b8eb6-5e20-40f3-a39b-9eea53d51aec",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/pxK2IY7/640/480",
  //             "title": "vulariter",
  //             "subtext": "Fugit currus demum conicio adiuvo.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "45af8826-d177-4799-8c70-514d06273161",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=7081519430500352",
  //             "title": "atqui",
  //             "subtext": "Candidus aperte accusator.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "72fd66b6-aeb4-4c40-a5d1-1fd675a59b7f",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/qEl9F/640/480",
  //             "title": "debeo",
  //             "subtext": "Templum altus adsuesco aliqua velociter antepono curto pax undique terra.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "ae20ceb1-10d6-4fdc-acf3-70c05e338710",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/fGKH1fnJd/640/480",
  //             "title": "defetiscor",
  //             "subtext": "Brevis creo terreo.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "8b8350da-1167-4d7a-a4d2-429649343cd9",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=7103204615520256",
  //             "title": "taceo",
  //             "subtext": "Commodi curia accusator acerbitas nam carbo speculum.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "f7897bca-25df-44a6-8948-4a9cdb68dc90",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/tJwT2/640/480",
  //             "title": "umquam",
  //             "subtext": "Aequus clementia subvenio ancilla stabilis statim caelestis vespillo ait.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "b0a24c1d-3674-4eeb-8770-94ee270a7cc1",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=1241604746641408",
  //             "title": "tener",
  //             "subtext": "Clamo tactus stipes adaugeo vomica accendo.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "96580044-be55-4812-8ca7-2be3f2d8d7ec",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/NHF2WO9/640/480",
  //             "title": "averto",
  //             "subtext": "Ars vinco asperiores dedico correptius tempore cometes quibusdam.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "b324571e-dc4d-4a95-b341-9d03ff17a3ec",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/PWIXajLi/640/480",
  //             "title": "quae",
  //             "subtext": "Aliquid summisse cervus magnam.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "3e8fe7ac-a4aa-4a80-a785-9a077a9d092c",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/NCoG2L/640/480",
  //             "title": "utor",
  //             "subtext": "Minus cura antiquus recusandae dignissimos cupressus.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "5868757a-b9f9-4b4e-8288-64b9530291c4",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/PtfZ4OaaX/640/480",
  //             "title": "surculus",
  //             "subtext": "Crinis desparatus synagoga.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "26a2da96-10a6-4d55-8fb3-28b870f49006",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/6Rfx6BrxA/640/480",
  //             "title": "conservo",
  //             "subtext": "Pax nulla careo atqui cibo desparatus clibanus totus balbus bellicus.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "96c3cbca-547f-457d-90bf-d6e8a6bcebc6",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/dQrW1f8c/640/480",
  //             "title": "cuppedia",
  //             "subtext": "Conservo decor avarus desolo volo bellicus vinco.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "478eb9cc-8f29-4a2a-b70c-f2e7a1dc086a",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=5601081448988672",
  //             "title": "allatus",
  //             "subtext": "Armarium tenus stabilis.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "53e255d6-f8ac-4fef-a6d7-28fabe12f3e7",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=4332181549744128",
  //             "title": "subseco",
  //             "subtext": "Abbas vapulus eum tepidus accusamus sponte.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "5f7d8114-2298-466c-a96e-36d675d02a2b",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=7768525043138560",
  //             "title": "concido",
  //             "subtext": "Bellum comparo repellat magnam aegrotatio antea.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "8f35fefa-f533-4739-96cc-b88c6ebae766",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=4707086214627328",
  //             "title": "aperte",
  //             "subtext": "Viridis cognomen sto toties vicinus arceo volva spiculum.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "99318cb7-900a-41d7-94fc-9e9ab3f2cf17",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/Gp7wtN2lsS/640/480",
  //             "title": "tam",
  //             "subtext": "Caries timidus spiculum despecto.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "e9db2a7c-28d0-4122-8310-7daf8a0f2a09",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=939166466572288",
  //             "title": "crebro",
  //             "subtext": "Textor verumtamen votum.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "72349b73-9772-4018-a247-8d59e23a2cc4",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/wDG1z68Jk/640/480",
  //             "title": "venio",
  //             "subtext": "Aggero tepesco tabesco coruscus vinculum voro harum fugiat alveus.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "11ed4b4b-73c7-4e37-8f3d-fa630b3ef280",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/KhxTcosR/640/480",
  //             "title": "consequuntur",
  //             "subtext": "Apud accusamus timidus armarium ventosus.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "498e24d3-c401-4e75-ab90-51b6039e0fa8",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=7868604080979968",
  //             "title": "tepesco",
  //             "subtext": "Videlicet appositus perferendis tricesimus accusantium corroboro caterva praesentium curis.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "2e38df81-e29c-43fe-bf8b-a2a3519da430",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=7927470000963584",
  //             "title": "adnuo",
  //             "subtext": "In aqua auctus autem sordeo.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "1611c799-1d50-4ae3-a3fb-3efd3cd91b35",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=2264814537670656",
  //             "title": "conspergo",
  //             "subtext": "Vos tricesimus demo thermae adnuo.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "4bd485c2-65df-4bd1-9038-113d54b1630e",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/QUR6vA/640/480",
  //             "title": "ventosus",
  //             "subtext": "Bonus vacuus vetus quisquam caute contego cibus suasoria canonicus.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "5effb599-d6fa-43c9-827c-3534336afa95",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=3835946994761728",
  //             "title": "clementia",
  //             "subtext": "Valetudo abscido quos thesaurus cursim sollers.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "4ada56ff-a561-4612-a812-023eb8c31c9f",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=8386112181501952",
  //             "title": "arbitro",
  //             "subtext": "Viridis comptus eveniet.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "420bf045-47b2-42a7-8924-63fdf6e1b41b",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=473071920087040",
  //             "title": "curiositas",
  //             "subtext": "Celer ventosus cuius aqua amplexus officia maiores vomer.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.738Z",
  //             "updatedAt": "2024-05-15T06:59:00.738Z"
  //         },
  //         {
  //             "id": "a09c2306-59cf-4369-8c45-88fe314b9bf9",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=1051152598695936",
  //             "title": "succurro",
  //             "subtext": "Defaeco averto adfero ater.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.739Z",
  //             "updatedAt": "2024-05-15T06:59:00.739Z"
  //         },
  //         {
  //             "id": "f6557e18-4517-4961-92c1-10a70c77124f",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://loremflickr.com/640/480?lock=2625548788432896",
  //             "title": "sapiente",
  //             "subtext": "Degenero blanditiis absens vomito aegrus cogo.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.739Z",
  //             "updatedAt": "2024-05-15T06:59:00.739Z"
  //         },
  //         {
  //             "id": "d893fe1d-45a2-4e97-b455-3918d0c6efef",
  //             "templateId": "bc52c826-3bd2-4438-8df2-c3a542439af4",
  //             "url": "https://picsum.photos/seed/6BPKe/640/480",
  //             "title": "aperio",
  //             "subtext": "Corona admoveo vindico recusandae tam iusto candidus.",
  //             "deletedAt": null,
  //             "createdAt": "2024-05-15T06:59:00.739Z",
  //             "updatedAt": "2024-05-15T06:59:00.739Z"
  //         }
  //     ]
  // }

  const clientData = clientStore((state) => state.singleClient);

  // // console.log(clientData[0].logoUrl);

  return (
    <Container>
      {/* logo, company name, more icon */}
      <div className="flex items-center justify-start gap-3">
        {/* logo */}
        <div className="h-[50px] w-[50px] rounded-full border overflow-hidden">
          <Image
            alt="company logo"
            height={50}
            width={50}
            className="object-cover h-[50px] w-[50px]"
            src={
              clientData[0].logoUrl === null
                ? "/images/no-image-2.png"
                : clientData[0].logoUrl
            }
          />
        </div>
        {/* company name */}
        <h2 className="text-sm font-semibold text-black">{data.name}</h2>
        {/* more icon */}
        <span className="ml-auto">
          <MyDropdownMenu id={data.id} data={data} />
        </span>
      </div>
      {/* DETAILS */}
      <ul className=" flex flex-wrap gap-3 items-center">
        <li className="flex items-center gap-3 text-sm px-3 py-1 rounded-xl border">
          {/* icon */}
          <div className="flex items-center gap-1">
            <span>
              <AiOutlinePicture />
            </span>
            <span className="font-light text-xs">Images</span>
          </div>
          {/* amount */}
          <span className="text-xs font-medium">{data.images.length}</span>
        </li>
        {/* QUOTE */}
        <li className="flex items-center gap-3 text-sm px-3 py-1 rounded-xl border">
          {/* icon */}
          <div className="flex items-center gap-1">
            <span>
              <BiSolidQuoteAltLeft />
            </span>
            <span className="font-light text-xs">Quote</span>
          </div>
          {/* amount */}
          <span className="text-xs font-medium">{data.quotes.length}</span>
        </li>
        {/* SIZE */}
        <li className="flex items-center gap-3 text-sm px-3 py-1 rounded-xl border">
          {/* icon */}
          <div className="flex items-center gap-1">
            <span>
              <AiOutlinePicture />
            </span>
            <span className="font-light text-xs">size</span>
          </div>
          {/* amount */}
          <span className="text-xs font-medium">{data.fileSize}</span>
        </li>
      </ul>
    </Container>
  );
};

export default TemplateCard;
