import './styles.css'


const COLOR_PALETTE = {
  "#7D80DA": 'Tropical Indigo',
  "#1E3231": 'Gunmetal',
  "#E9D985": 'Flax',
  "#B2BD7E": 'Olivine',
  "#749C75": 'Asparagus',
  "#96C0B7": 'Aqua',
  "#D8D9D5": 'Platinum'
};


const addOptionsToColorPicker = () => {
const colorPickerSelect = document.querySelector('#color-picker');

Object.keys(COLOR_PALETTE).forEach((color) => {
const option = document.createElement('option');
option.value = color;
option.innerText = COLOR_PALETTE[color];

colorPickerSelect.append(option)
})
};

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker')
  const colorName = document.querySelector('#color-name')

  colorPickerSelect.addEventListener('change', (event) => {
const newColor = event.target.value;
document.body.style.backgroundColor = newColor;
colorName.innerText = `${COLOR_PALETTE[newColor] } | ${newColor}` || '-';
  });
}

addOptionsToColorPicker();
addEventListenerToColorPicker();

