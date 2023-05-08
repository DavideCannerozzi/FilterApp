import { InputProps } from './Input.interface'

const Input: React.FC<InputProps> = ({ getValue, inputValue }) => {
  return (
    <div>
      <input type="text" value={inputValue} onChange={getValue} />
    </div>
  )
}

export default Input
