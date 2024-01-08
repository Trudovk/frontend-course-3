import PocketBase from "pocketbase";

export const pb = new PocketBase("http://127.0.0.1:8090");

//тут мы создаем коллекцию серверов через код (тк через админку дольше)
const data = [
  {
    processor: "Intel Xeon E5-2630 v4",
    disk: "1TB HDD",
    ram: "16GB",
    rentPerMonth: "5000  руб./мес.",
  },
  {
    processor: "AMD Ryzen 7 3700X",
    disk: "2TB HDD",
    ram: "32GB",
    rentPerMonth: "6000  руб./мес.",
  },
  {
    processor: "Intel Core i7-9700K",
    disk: "500GB SSD",
    ram: "16GB",
    rentPerMonth: "7000  руб./мес.",
  },
  {
    processor: "Intel Xeon E5-2630 v4",
    disk: "1TB HDD",
    ram: "16GB",
    rentPerMonth: "8000  руб./мес.",
  },
  {
    processor: "AMD Ryzen 7 3700X",
    disk: "2TB HDD",
    ram: "32GB",
    rentPerMonth: "9000  руб./мес.",
  },
  {
    processor: "Intel Core i7-9700K",
    disk: "500GB SSD",
    ram: "16GB",
    rentPerMonth: "10000  руб./мес.",
  },
  {
    processor: "Intel Xeon E5-2630 v4",
    disk: "1TB HDD",
    ram: "16GB",
    rentPerMonth: "11000  руб./мес.",
  },
  {
    processor: "AMD Ryzen 7 3700X",
    disk: "2TB HDD",
    ram: "32GB",
    rentPerMonth: "12000  руб./мес.",
  },
  {
    processor: "Intel Core i7-9700K",
    disk: "500GB SSD",
    ram: "16GB",
    rentPerMonth: "13000  руб./мес.",
  },
  {
    processor: "Intel Xeon E5-2630 v4",
    disk: "1TB HDD",
    ram: "16GB",
    rentPerMonth: "14000  руб./мес.",
  },
  {
    processor: "AMD Ryzen 7 3700X",
    disk: "2TB HDD",
    ram: "32GB",
    rentPerMonth: "15000  руб./мес.",
  },
  {
    processor: "Intel Core i7-9700K",
    disk: "500GB SSD",
    ram: "16GB",
    rentPerMonth: "16000  руб./мес.",
  },
  {
    processor: "Intel Xeon E5-2630 v4",
    disk: "1TB HDD",
    ram: "16GB",
    rentPerMonth: "17000  руб./мес.",
  },
  {
    processor: "AMD Ryzen 7 3700X",
    disk: "2TB HDD",
    ram: "32GB",
    rentPerMonth: "18000  руб./мес.",
  },
  {
    processor: "Intel Core i7-9700K",
    disk: "500GB SSD",
    ram: "16GB",
    rentPerMonth: "19000  руб./мес.",
  },
  {
    processor: "Intel Xeon E5-2630 v4",
    disk: "1TB HDD",
    ram: "16GB",
    rentPerMonth: "20000  руб./мес.",
  },
  {
    processor: "AMD Ryzen 7 3700X",
    disk: "2TB HDD",
    ram: "32GB",
    rentPerMonth: "21000  руб./мес.",
  },
  {
    processor: "Intel Core i7-9700K",
    disk: "500GB SSD",
    ram: "16GB",
    rentPerMonth: "22000  руб./мес.",
  },
  {
    processor: "Intel Xeon E5-2630 v4",
    disk: "1TB HDD",
    ram: "16GB",
    rentPerMonth: "23000  руб./мес.",
  },
  {
    processor: "AMD Ryzen 7 3700X",
    disk: "2TB HDD",
    ram: "32GB",
    rentPerMonth: "24000  руб./мес.",
  },
];
export async function createServers() {
  for (let i = 0; i < data.length; i++) {
    await pb.collection("servers").create(data[i]);
  }
}
