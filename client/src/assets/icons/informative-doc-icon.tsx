export default function InformativeDocIcon({
  fillColor,
}: {
  fillColor: string[] | string;
}) {
  const gradientId = 'gradient';
  const fillColorArray = Array.isArray(fillColor) ? fillColor : [fillColor];

  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="100%"
      viewBox="0 0 992 928"
      enableBackground="new 0 0 992 928"
      xmlSpace="preserve"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          {fillColorArray.map((color, index) => (
            <stop
              key={index}
              offset={`${(index / (fillColorArray.length - 1)) * 100}%`}
              stopColor={color}
            />
          ))}
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        opacity="1.000000"
        stroke="none"
        d="
		M419.000000,688.238831 
			C397.003662,688.243042 375.506287,688.371399 354.011566,688.187561 
			C345.657776,688.116150 337.575226,686.499329 330.262817,681.956482 
			C317.059814,673.753906 310.067413,661.789490 309.825104,646.454285 
			C309.432922,621.631348 309.825775,596.796936 309.626770,571.969421 
			C309.588318,567.174744 311.057526,565.401917 315.888733,565.720581 
			C334.046783,566.918152 351.092804,561.602600 367.570862,555.153809 
			C380.064301,550.264465 391.997314,543.363342 402.058441,534.432007 
			C417.331665,520.873840 430.428558,505.537079 439.414398,486.626434 
			C444.696655,475.509918 447.798248,464.079498 450.789581,452.389954 
			C454.908386,436.294678 453.790253,419.760559 452.056091,403.860596 
			C450.586700,390.388214 446.209503,376.883636 439.805878,364.137939 
			C432.770233,350.134308 424.076813,337.666382 413.460876,326.428284 
			C404.196594,316.621063 393.400238,308.676208 381.699249,301.908691 
			C369.024933,294.578247 355.260101,290.550385 341.211548,286.814209 
			C332.872314,284.596405 324.728149,285.598572 316.499939,285.240997 
			C309.878479,284.953247 309.712830,285.048615 309.708344,278.535339 
			C309.689667,251.373306 309.654114,224.211197 309.703064,197.049271 
			C309.736816,178.344345 325.765411,160.362442 344.332031,157.644012 
			C349.637238,156.867249 354.905334,156.683258 360.220245,156.683655 
			C440.039948,156.689468 519.859741,156.736099 599.679260,156.619141 
			C605.657227,156.610382 610.056152,158.734283 614.261169,162.788956 
			C631.841797,179.740860 649.478882,196.641037 667.410278,213.219437 
			C676.437317,221.565338 685.492371,229.878281 694.432373,238.319916 
			C703.374939,246.764038 712.423157,255.101089 721.593689,263.296417 
			C724.682617,266.056885 726.234863,269.046722 726.232849,273.248077 
			C726.171814,398.393341 726.205139,523.538635 726.151672,648.683899 
			C726.143738,667.265503 710.149963,684.656921 691.354309,687.345947 
			C686.044006,688.105713 680.771545,688.258911 675.454956,688.258484 
			C590.136658,688.252014 504.818329,688.245056 419.000000,688.238831 
		z"
      />
      <path
        fill={`url(#${gradientId})`}
        opacity="1.000000"
        stroke="none"
        d="
		M418.458496,351.637634 
			C430.970764,369.439026 438.545990,388.991852 440.717194,410.091461 
			C442.857239,430.887878 441.013397,451.557495 433.044098,471.350189 
			C420.314667,502.965271 398.672852,526.375427 368.333710,541.549255 
			C347.532379,551.952820 325.136963,555.983704 302.053467,554.054382 
			C275.225891,551.812134 251.196564,542.100159 230.415939,524.587646 
			C205.945419,503.965515 190.267944,478.034790 185.120850,446.595520 
			C179.347366,411.330200 186.501007,378.374176 207.856491,349.295044 
			C229.433243,319.914612 258.476685,301.517914 294.647308,297.149963 
			C329.035370,292.997375 361.450470,299.981171 389.671692,321.734680 
			C400.692200,330.229462 410.368134,339.885162 418.458496,351.637634 
		M233.955643,506.546722 
			C259.034058,531.071045 289.589142,540.860046 323.876801,537.590088 
			C351.325043,534.972412 375.211975,523.348328 394.363647,502.978149 
			C419.037567,476.734375 429.062225,445.466431 424.514313,410.001221 
			C420.725006,380.451935 407.055420,355.863068 383.624695,337.005951 
			C354.089386,313.235779 320.415619,306.563354 284.235809,315.346558 
			C255.432419,322.339020 232.410843,338.907043 216.494492,364.427185 
			C202.120773,387.473846 195.873260,412.580963 199.627869,439.527679 
			C203.232544,465.398193 213.982620,488.042542 233.955643,506.546722 
		z"
      />
      <path
        fill={`url(#${gradientId})`}
        opacity="1.000000"
        stroke="none"
        d="
		M321.874786,421.130066 
			C321.905914,442.096191 321.973206,462.581451 321.949005,483.066650 
			C321.941040,489.818329 318.516815,494.106750 313.240814,494.354919 
			C306.906616,494.652863 302.784027,490.661652 302.762360,483.884338 
			C302.700592,464.565033 302.744324,445.245422 302.748413,425.925934 
			C302.749664,420.096771 302.683441,414.266418 302.781097,408.438812 
			C302.891541,401.845581 307.074585,396.977417 312.349640,397.101196 
			C317.626892,397.225006 321.626923,402.175964 321.707733,408.672821 
			C321.757385,412.665009 321.819031,416.657043 321.874786,421.130066 
		z"
      />
      <path
        fill={`url(#${gradientId})`}
        opacity="1.000000"
        stroke="none"
        d="
		M320.740417,367.164124 
			C324.683472,372.355682 324.741913,377.597382 321.178192,381.988403 
			C317.666412,386.315430 312.531525,387.663391 307.776367,385.506561 
			C302.857819,383.275574 300.090027,378.245758 300.829803,372.882904 
			C301.989624,364.475677 312.077820,361.404938 320.740417,367.164124 
		z"
      />
    </svg>
  );
}
