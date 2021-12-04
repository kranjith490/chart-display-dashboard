import { generateParticular } from "./ParticularGeneraor";

export const constructParticulars = (response) => {
  let data = [];
  data = response;
  const particulars = generateParticular();
  if (data.length > 0) {
    data.map((item, key) => {
      item.elements.map((element, index) => {
        let temp = {
          particular: particulars[index],
          value: element,
        };
        data[key].elements[index] = temp;
      });
    });
    return data;
  }
  return {};
};
