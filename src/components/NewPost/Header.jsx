import React from 'react';

function Header() {
	return (
		<>
			<div className="flex bg-gray-100 rounded-tl-lg rounded-tr-lg">
				<div className="flex  gap-1 px-1 py-2 font-semibold cursor-pointer ">
					<svg
						width="24px"
						height="24px"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M12.3023235,7.94519388 L4.69610276,15.549589 C4.29095108,15.9079238 4.04030835,16.4092335 4,16.8678295 L4,20.0029438 L7.06398288,20.004826 C7.5982069,19.9670062 8.09548693,19.7183782 8.49479322,19.2616227 L16.0567001,11.6997158 L12.3023235,7.94519388 Z M13.7167068,6.53115006 L17.4709137,10.2855022 L19.8647941,7.89162181 C19.9513987,7.80501747 20.0000526,7.68755666 20.0000526,7.56507948 C20.0000526,7.4426023 19.9513987,7.32514149 19.8647932,7.23853626 L16.7611243,4.13485646 C16.6754884,4.04854589 16.5589355,4 16.43735,4 C16.3157645,4 16.1992116,4.04854589 16.1135757,4.13485646 L13.7167068,6.53115006 Z M16.43735,2 C17.0920882,2 17.7197259,2.26141978 18.1781068,2.7234227 L21.2790059,5.82432181 C21.7406843,6.28599904 22.0000526,6.91216845 22.0000526,7.56507948 C22.0000526,8.21799052 21.7406843,8.84415992 21.2790068,9.30583626 L9.95750718,20.6237545 C9.25902448,21.4294925 8.26890003,21.9245308 7.1346,22.0023295 L2,22.0023295 L2,21.0023295 L2.00324765,16.7873015 C2.08843822,15.7328366 2.57866679,14.7523321 3.32649633,14.0934196 L14.6953877,2.72462818 C15.1563921,2.2608295 15.7833514,2 16.43735,2 Z"
						/>
					</svg>
					<span className="border-r-2 border-grey-500 pr-5">Compose Post</span>
				</div>
				<div className="flex  gap-1 px-1 py-2 font-semibold cursor-pointer ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24px"
						height="24px"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1.5}
							d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
					<span className="border-r-2 border-grey-500 pr-5 text-cyan-600">
						Photos / Videos
					</span>
				</div>
				<div className="flex  gap-1 px-1 py-2 font-semibold cursor-pointer ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24px"
						height="24px"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1.5}
							d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
						/>
					</svg>
					<span className=" pr-5 text-cyan-600">Live Video</span>
				</div>
			</div>
		</>
	);
}

export default Header;
