/**
 * Displays the loader used while loading data
 * Can be customized in the css file
 * @returns {JSX.Element} Html, css content to display
 */
const Loader = () : JSX.Element => {
  return (
    <div className='loader'>
        <div className='loader__logo'></div>
    </div>
  );
}

export default Loader;