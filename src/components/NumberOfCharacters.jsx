// src/components/NumberOfCharacters.jsx 

/**
 * NumberOfCharacters component
 * @param {*} Array of characters, default is an empty array
 * @returns 
 */
export default function NumberOfCharacters({ characters = [] }) {
    // If no characters are provided or the array is empty
    if (characters.length === 0) {
      return <p>There is no character</p>;
    }

    // If there are characters in the array
    return (
      <p>
        {`There ${characters.length === 1 ? 'is' : 'are'} ${characters.length} character${characters.length === 1 ? '' : 's'}`}
      </p>
    );
}