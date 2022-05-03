import React from 'react';

function Bottom() {
	return (
		<>
			<div className="grid grid-cols-2 items-center">
				<div className="flex flex-col gap-2 my-2 mr-5">
					<div className="bg-gray-100 flex py-1 px-11 py-1 rounded-xl hover:bg-gray-200 ">
						<svg
							width="24px"
							height="24px"
							xmlns="http://www.w3.org/2000/svg"
							className="text-cyan-800"
							viewBox="0 0 640 512"
							fill="currentColor"
						>
							<path d="M630.6 364.9l-90.3-90.2c-12-12-28.3-18.7-45.3-18.7h-79.3c-17.7 0-32 14.3-32 32v79.2c0 17 6.7 33.2 18.7 45.2l90.3 90.2c12.5 12.5 32.8 12.5 45.3 0l92.5-92.5c12.6-12.5 12.6-32.7.1-45.2zm-182.8-21c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24c0 13.2-10.7 24-24 24zm-223.8-88c70.7 0 128-57.3 128-128C352 57.3 294.7 0 224 0S96 57.3 96 128c0 70.6 57.3 127.9 128 127.9zm127.8 111.2V294c-12.2-3.6-24.9-6.2-38.2-6.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 287.9 0 348.1 0 422.3v41.6c0 26.5 21.5 48 48 48h352c15.5 0 29.1-7.5 37.9-18.9l-58-58c-18.1-18.1-28.1-42.2-28.1-67.9z" />
						</svg>

						<span className="font-medium pl-1">Tag Friends</span>
					</div>
					<div className="bg-gray-100 flex  px-11 py-1 rounded-xl hover:bg-gray-200">
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
						<span className="font-medium pl-1">02</span>
					</div>
				</div>
				<div className="flex flex-col gap-2 ml-5">
					<div className="bg-gray-100 flex  px-11 py-1 rounded-xl hover:bg-gray-200">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24px"
							height="24px"
							className="text-pink-700"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="font-medium pl-1">Check In</span>
					</div>
					<div className="bg-gray-100 flex  px-11 py-1 rounded-xl hover:bg-gray-200">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24px"
							height="24px"
							className="text-pink-700"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="font-medium pl-1"> Tag Event</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default Bottom;
