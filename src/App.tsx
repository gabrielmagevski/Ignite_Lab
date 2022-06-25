import { gql, useQuery } from '@apollo/client';
import './styles/global.css';

const SearchLessons = gql`
  query {
    lessons {
      id,
      slug,
      title,
      teacher {
        avatarURL,
        bio,
        name
      }
    }
  }
`

type Lesson = {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(SearchLessons);
  console.log(data);

  return (
   <ul>
      {
        data?.lessons.map(lesson => {
          return <li key={lesson.id}>{lesson.title}</li>
        })
      }
   </ul>
  )
}

export default App
