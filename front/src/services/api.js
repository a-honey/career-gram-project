import axios from "axios";

// userId의 FieldName 데이터 요청하기
const getDatas = async (userId, FieldName) => {
  try {
    console.log("getData 실행됨");
    return await axios.get(`/${userId}/${FieldName}`);
  } catch (err) {
    console.log("포스트 가져오기 실패");
  }
};

// FieldName의 documentId 데이터 불러오기
const getData = async (documentId, FieldName) => {
  try {
    return await axios.post(`/${FieldName}/${documentId}`);
  } catch (err) {
    console.log("포스트 가져오기 실패");
  }
};

// FieldName에 newData 추가하기
const addData = async (userId, FieldName, newData) => {
  try {
    return await axios.post(`/${userId}/${FieldName}`, newData);
  } catch {
    console.log("포스트 업로드 실패");
  }
};

// userId의 FieldName 필드에 data 업데이트하기
const updateData = async (userId, FieldName, updateData) => {
  try {
    return await axios.put(`/${userId}/${FieldName}`, updateData);
  } catch {
    console.log("포스트 업로드 실패");
  }
};

// userId의 FieldName 필드에 data 삭제하기
const deleteData = async (documentId, FieldName) => {
  try {
    await axios.delete(`/${FieldName}/${documentId}`);
  } catch {
    console.log("포스트 업로드 실패");
  }
};

// tryCatch를 거쳐가도 될듯

export { getData, addData, updateData, deleteData, getDatas };
