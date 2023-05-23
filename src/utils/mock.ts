import Mock, { Mockjs } from "mockjs";
import axios from "axios";
const data: Mockjs = Mock.mock({
  "list|10": [
    {
      "id|+1": 1,
      title: "@sentence(5, 10)",
      image: '@image("200x100")',
    },
  ],
});

Mock.mock("/api/list", "get", data);

async function fetchData() {
  const result = await axios.get("/api/list");
  return result.data.list;
}

export default fetchData;
