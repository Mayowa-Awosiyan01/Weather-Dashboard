import Image from "next/image";
export default function WeatherWidget() {
  //Using fixed values to get the formatting/layour right
  return (
    <div className="max-w-sm p-6 rounded-2xl bg-blue-600 text-white shadow-xl flex flex-col items-center gap-4">
      <span className="text-2xl font-semibold">Toronto</span>

      <Image
        src="https://uxwing.com/wp-content/themes/uxwing/download/weather/day-sunny-color-icon.png"
        alt="Sunny weather"
        width={80}
        height={80}
      />

      <div className="text-center">
        <p className="text-4xl font-bold">24°C</p>
        <p className="text-md">Sunny</p>
      </div>

      <div className="flex justify-between w-full text-sm text-blue-200 pt-4 border-t border-blue-400">
        <div>
          <p>Humidity</p>
          <p>55%</p>
        </div>
        <div>
          <p>Wind</p>
          <p>13 km/h</p>
        </div>
        <div>
          <p>Feels Like</p>
          <p>26°C</p>
        </div>
      </div>
    </div>
  );
}
