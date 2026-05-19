import CommentForm from '@components/ui/CommentForm'
import Comments from '@components/ui/Comments'
/** @import { JSX } from 'react' */

/**
 * Componente que representa la aplicación principal.
 * @returns {JSX.Element} El componente de la aplicación.
 */
export const App = () => {
  return (
    <section className="bg-grey-50 min-h-screen flex flex-col items-center justify-center w-full h-full">
      <div className="md:max-w-[85%] my-10 mb-50">
        <Comments />
      </div>
      <CommentForm />
    </section>
  )
}
