import { EducationModel } from "../schemas/education";

class Education {

  // 새로운 학력정보를 추가하는 기능을 구현합니다.

  static async create({ newEduData }) {

    // 전달받은 newEduData 데이터로 새로운 학력정보 document를 만듭니다.
    const createdNewEducation = await EducationModel.create(newEduData);
    return createdNewEducation;

  }

  // 사용자 document의 ObjectId로 학력정보를 찾아주는 기능을 구현합니다.
  
  static async findEducationByEduId({ eduId }) {

    // 사용자 ID를 사용해서 학력정보 document를 찾습니다.
    // userId는 User 문서의 ObjectId인 _id를 ref로 참조합니다. 스키마를 참고하세요.
    const foundEducationByUser = await EducationModel.findOne({ _id: eduId });
    return foundEducationByUser;

  }

  // document의 ObjectId로 학력정보를 찾아주는 기능을 구현합니다.
  static async findEducationByUserId({ userId }) {

    // 사용자 ID를 사용해서 학력정보 document를 찾습니다.
    const foundEducationByUser = await EducationModel.findOne({ userId: userId });
    return foundEducationByUser;

  }


  // 프론트엔드로부터 입력받은 새로운 학력정보로 기존 학력정보 document를 최신화하는 기능을 구현합니다.
  static async update( eduId, { updatedEduData } ) {
    
    // 사용자의 기존 학력정보 document를 찾을 때 사용할 ObjectId를 지정합니다.
    const filter = { _id: eduId };

    // 최신화가 필요한 필드와 그 필드에 넣어줄 새로운 데이터를 지정합니다.
    const update = { $set: updatedEduData };

    // findOneAndUpdate() 메소드에 사용할 옵션을 지정합니다. 지금은 사용하지 않도록 하겠습니다.
    const option = null;

    // 위에서 지정한 변수들을 findOneAndUpdate() 메소드에 전달인자로 사용해서 학력정보 document를 최신화합니다.
    const updatedEducation = await EducationModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedEducation;

  }


  // 학력정보를 삭제하는 기능을 구현합니다.
  static async delete({ eduId }) {
    return EducationModel.findOneAndDelete({ _id: eduId });
  }

}

export { Education };