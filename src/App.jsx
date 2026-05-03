import VoteCounter from '@components/ui/voteCounter'
/** @import { JSX } from 'react' */

/**
 * Componente que representa la aplicación principal.
 * @returns {JSX.Element} El componente de la aplicación.
 */
export const App = () => {
  return (
    <section className="bg-background min-h-screen flex items-center justify-center">
      <VoteCounter />
    </section>
  )
}
