import mongoose from 'mongoose';

const { Schema } = mongoose;

/* 스키마를 만들 때는 mongoose 모듈의 Schema를 사용하여 정의한다. 
각 필드 이름과 필드의 데이터 타입 정보가 들어있는 객체를 작성한다.
필드의 기본값으로는 default 값을 설정해주면 된다. */
const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String], // 문자로 이루어진 배열
  publishedDate: {
    type: Date,
    default: Date.now, // 현재 날짜를 기본값으로 설정
  },
});
// 모델을 만들 때는 mongoose.model 함수 사용
// model() 함수는 기본적으로 두 개의 파라미터 필요 model(스키마이름, 스키마객체)
// 데이터베이스는 스키마 이름을 정해주면 그 이름의 복수 형태로 컬렉션 이름을 만든다. Post -> posts
// 이것을 무시하려면 mongoose.model('Post', PostSchema, 'custom_book_collection')  으로 세 번째 파라미터에 넣어주기
const Post = mongoose.model('Post', PostSchema);
export default Post;
