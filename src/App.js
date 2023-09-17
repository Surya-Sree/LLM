// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="temp-div"></div>
      <Sidebar />
      <Topbar />
      <Chatbox />
      <Upload />
    </div>
  );
}

function Sidebar() {
  return (
    <ul class="side-bar">
      <li class="icon llm">
        <span class="tooltip">LLM</span>
        <LlmIcon />
      </li>
      <li class="icon trans">
        <span class="tooltip">Translator</span>
        <TransIcon />
      </li>
      <li class="icon dummy">
        <span class="tooltip">Dummy</span>
        <DumIcon />
      </li>
    </ul>
  );
}

function Topbar() {}

function Chatbox() {
  return (
    <div className="Chat">
      <div className="displayScreen"></div>
      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          name=""
          placeholder="Search something"
        />
        <button className="searchButton" href="#">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

function Upload() {
  return (
    <div className="upload-field">
      <div className="upload-screen">
        <p className="upload-header">Uploaded Documents</p>
        <div className="upload-display"></div>
      </div>
      <button className="upload">
        <svg
          className="upload-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
            stroke="#fffffff"
            stroke-width="2"
          ></path>
          <path
            d="M17 15V18M17 21V18M17 18H14M17 18H20"
            stroke="#fffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        ADD FILE
      </button>
    </div>
  );
}

function LlmIcon() {
  return (
    <svg
      className="icon-llm"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
  );
}

function TransIcon() {
  return (
    <svg
      className="icon-trans"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
      />
    </svg>
  );
}

function DumIcon() {
  return (
    <svg
      className="icon-dummy"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      className="search-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
    >
      <g clip-path="url(#clip0_2_17)">
        <g filter="url(#filter0_d_2_17)">
          <path
            d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            shape-rendering="crispEdges"
          ></path>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_2_17"
          x="-0.418549"
          y="3.70435"
          width="29.7139"
          height="29.7139"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          ></feColorMatrix>
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_17"
          ></feBlend>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2_17"
            result="shape"
          ></feBlend>
        </filter>
        <clipPath id="clip0_2_17">
          <rect
            width="28.0702"
            height="28.0702"
            fill="white"
            transform="translate(0.403503 0.526367)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

export default App;
