import React from 'react'

const IconComponent = (props) => {
    if (props.name == 'Camera') {
        return (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Iconly/Bulk/Camera">
                    <g id="Camera">
                        <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M22.28 13.4295C22.28 14.0954 22.8133 14.6282 23.48 14.6282C24.1467 14.6282 24.6933 14.0954 24.6933 13.4295C24.6933 12.7636 24.1467 12.2175 23.48 12.2175C22.8133 12.2175 22.28 12.7636 22.28 13.4295ZM19.6933 21.4739C18.7467 22.4195 17.44 23.0055 16 23.0055C14.6 23.0055 13.2933 22.4595 12.2933 21.4739C11.3067 20.475 10.76 19.1698 10.76 17.7714C10.7467 16.3862 11.2933 15.081 12.28 14.0821C13.28 13.0832 14.6 12.5372 16 12.5372C17.4 12.5372 18.72 13.0832 19.7067 14.0688C20.6933 15.0677 21.24 16.3862 21.24 17.7714C21.2267 19.2231 20.64 20.5283 19.6933 21.4739ZM16 14.535C15.1333 14.535 14.32 14.8679 13.6933 15.4939C13.08 16.1065 12.7467 16.919 12.76 17.758V17.7714C12.76 18.6371 13.0933 19.4495 13.7067 20.0621C14.32 20.6748 15.1333 21.0078 16 21.0078C17.7867 21.0078 19.2267 19.556 19.24 17.7714C19.24 16.9057 18.9067 16.0932 18.2933 15.4806C17.68 14.8679 16.8667 14.535 16 14.535Z" fill="#8A8A8A" />
                        <path id="Path" opacity="0.4" d="M23.2534 8.31521L23.1201 8.0222C22.7601 7.26304 22.3467 6.38402 22.0934 5.87791C21.4801 4.67925 20.4267 4.01332 19.1334 4H12.8534C11.5601 4.01332 10.5201 4.67925 9.90675 5.87791C9.64008 6.41065 9.18675 7.36959 8.81342 8.15538L8.73342 8.31521C8.69342 8.42175 8.58675 8.47503 8.48008 8.47503C5.26675 8.47503 2.66675 11.0855 2.66675 14.2819V22.1931C2.66675 25.3896 5.26675 28 8.48008 28H23.5201C26.7201 28 29.3334 25.3896 29.3334 22.1931V14.2819C29.3334 11.0855 26.7201 8.47503 23.5201 8.47503C23.4001 8.47503 23.3067 8.40844 23.2534 8.31521Z" fill="#8A8A8A" />
                    </g>
                </g>
            </svg>
        )
    } else if (props.name == 'add-line-1') {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_37_264)">
                    <path d="M12 11.5561L17.7781 5.77807L18.7613 6.76129L12.9832 12.5394L18.7613 18.3174L17.7781 19.3006L12 13.5226L6.22193 19.3006L5.23871 18.3174L11.0168 12.5394L5.23871 6.76129L6.22193 5.77807L12 11.5561Z" fill="#8A8A8A" />
                </g>
                <defs>
                    <clipPath id="clip0_37_264">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        )
    } else if (props.name == 'add-line') {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="#585CC6" />
            </svg>
        )
    } else if (props.name == 'Delete') {
        return (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M16.3694 7.90705C16.3694 7.96371 15.9253 13.581 15.6716 15.9451C15.5127 17.3959 14.5775 18.2759 13.1746 18.3009C12.0966 18.325 11.0414 18.3333 10.0032 18.3333C8.901 18.3333 7.82309 18.325 6.77678 18.3009C5.42088 18.2684 4.4848 17.3709 4.33406 15.9451C4.07309 13.5727 3.63706 7.96371 3.62895 7.90705C3.62085 7.73622 3.67596 7.57373 3.78781 7.44206C3.89803 7.3204 4.05688 7.24707 4.22383 7.24707H15.7826C15.9488 7.24707 16.0995 7.3204 16.2186 7.44206C16.3297 7.57373 16.3856 7.73622 16.3694 7.90705Z" fill="#EB5757" />
                <path d="M17.5 4.98068C17.5 4.63819 17.2301 4.36986 16.9059 4.36986H14.4762C13.9818 4.36986 13.5522 4.01821 13.442 3.52239L13.3059 2.91492C13.1154 2.18077 12.4581 1.66663 11.7206 1.66663H8.2802C7.53458 1.66663 6.88378 2.18077 6.68603 2.95491L6.55879 3.52323C6.44775 4.01821 6.01821 4.36986 5.52464 4.36986H3.09488C2.76988 4.36986 2.5 4.63819 2.5 4.98068V5.29733C2.5 5.63149 2.76988 5.90814 3.09488 5.90814H16.9059C17.2301 5.90814 17.5 5.63149 17.5 5.29733V4.98068Z" fill="#EB5757" />
            </svg>
        )
    } else if (props.name == 'Female') {
        return (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4591 1C8.01031 1 5.99995 2.88025 6 5.20028C6.00002 7.33964 7.71488 9.08217 9.90121 9.34388V13.8968H7.30321V14.9715H9.90121V18.03H11.0171V14.9715H13.6107V13.8968H11.0171V9.34388C13.2037 9.08217 14.9205 7.33964 14.9205 5.20028C14.9205 2.88025 12.908 1 10.4591 1ZM13.8046 5.20028C13.8046 3.47651 12.3205 2.07473 10.4591 2.07473C8.59777 2.07473 7.11584 3.47651 7.11588 5.20028C7.11589 6.92404 8.59781 8.32372 10.4591 8.32372C12.3205 8.32372 13.8046 6.92404 13.8046 5.20028Z" fill="#585CC6" stroke="#585CC6" />
            </svg>
        )
    } else if (props.name == 'Frame 137336554') {
        return (
            <svg width="184" height="24" viewBox="0 0 184 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0144 4.00835C14.6233 4.00835 14.9322 4.01979 15.9583 4.06556C16.9118 4.10752 17.4267 4.26771 17.77 4.40121C18.2239 4.57666 18.5519 4.79026 18.8914 5.12972C19.2347 5.473 19.4444 5.79721 19.6199 6.2511C19.7534 6.59438 19.9136 7.11311 19.9555 8.06285C20.0013 9.09268 20.0128 9.40163 20.0128 12.0067C20.0128 14.6157 20.0013 14.9246 19.9555 15.9506C19.9136 16.9042 19.7534 17.4191 19.6199 17.7624C19.4444 18.2163 19.2308 18.5443 18.8914 18.8837C18.5481 19.227 18.2239 19.4368 17.77 19.6123C17.4267 19.7458 16.908 19.906 15.9583 19.9479C14.9284 19.9937 14.6195 20.0051 12.0144 20.0051C9.40545 20.0051 9.0965 19.9937 8.07048 19.9479C7.11693 19.906 6.60201 19.7458 6.25873 19.6123C5.80484 19.4368 5.47682 19.2232 5.13735 18.8837C4.79407 18.5405 4.58429 18.2163 4.40884 17.7624C4.27534 17.4191 4.11515 16.9004 4.07319 15.9506C4.02742 14.9208 4.01598 14.6118 4.01598 12.0067C4.01598 9.39782 4.02742 9.08887 4.07319 8.06285C4.11515 7.1093 4.27534 6.59438 4.40884 6.2511C4.58429 5.79721 4.79789 5.46919 5.13735 5.12972C5.48063 4.78645 5.80484 4.57666 6.25873 4.40121C6.60201 4.26771 7.12074 4.10752 8.07048 4.06556C9.0965 4.01979 9.40545 4.00835 12.0144 4.00835ZM12.0144 2.25C9.36349 2.25 9.03166 2.26144 7.99038 2.30721C6.95291 2.35298 6.23966 2.52081 5.62176 2.7611C4.97716 3.01284 4.43173 3.34468 3.89011 3.89011C3.34468 4.43172 3.01284 4.97716 2.7611 5.61794C2.52081 6.23966 2.35298 6.9491 2.30721 7.98656C2.26144 9.03165 2.25 9.36349 2.25 12.0144C2.25 14.6652 2.26144 14.9971 2.30721 16.0383C2.35298 17.0758 2.52081 17.7891 2.7611 18.407C3.01284 19.0516 3.34468 19.597 3.89011 20.1386C4.43173 20.6802 4.97716 21.0159 5.61794 21.2638C6.23966 21.5041 6.9491 21.6719 7.98656 21.7177C9.02784 21.7635 9.35968 21.7749 12.0105 21.7749C14.6614 21.7749 14.9933 21.7635 16.0345 21.7177C17.072 21.6719 17.7853 21.5041 18.4032 21.2638C19.0439 21.0159 19.5894 20.6802 20.131 20.1386C20.6726 19.597 21.0083 19.0516 21.2562 18.4108C21.4965 17.7891 21.6643 17.0796 21.7101 16.0422C21.7558 15.0009 21.7673 14.669 21.7673 12.0182C21.7673 9.36731 21.7558 9.03547 21.7101 7.99419C21.6643 6.95673 21.4965 6.24347 21.2562 5.62557C21.0159 4.97716 20.6841 4.43172 20.1386 3.89011C19.597 3.34849 19.0516 3.01284 18.4108 2.76492C17.7891 2.52462 17.0796 2.3568 16.0422 2.31103C14.9971 2.26144 14.6652 2.25 12.0144 2.25Z" fill="#585CC6" />
                <path d="M12.0157 6.99866C9.24657 6.99866 7 9.24522 7 12.0143C7 14.7834 9.24657 17.03 12.0157 17.03C14.7848 17.03 17.0314 14.7834 17.0314 12.0143C17.0314 9.24522 14.7848 6.99866 12.0157 6.99866ZM12.0157 15.2679C10.2192 15.2679 8.76216 13.8108 8.76216 12.0143C8.76216 10.2178 10.2192 8.76082 12.0157 8.76082C13.8122 8.76082 15.2692 10.2178 15.2692 12.0143C15.2692 13.8108 13.8122 15.2679 12.0157 15.2679Z" fill="#585CC6" />
                <path d="M18.3991 6.8006C18.3991 7.44902 17.8727 7.97156 17.2281 7.97156C16.5797 7.97156 16.0571 7.4452 16.0571 6.8006C16.0571 6.15219 16.5835 5.62964 17.2281 5.62964C17.8727 5.62964 18.3991 6.156 18.3991 6.8006Z" fill="#585CC6" />
                <path d="M61.75 12.0596C61.75 6.6419 57.3848 2.25 52 2.25C46.6152 2.25 42.25 6.6419 42.25 12.0596C42.25 16.9558 45.8154 21.0141 50.4766 21.75V14.8952H48.001V12.0596H50.4766V9.89841C50.4766 7.43988 51.9322 6.08187 54.1593 6.08187C55.2257 6.08187 56.3418 6.27346 56.3418 6.27346V8.68754H55.1124C53.9013 8.68754 53.5234 9.44376 53.5234 10.2203V12.0596H56.2275L55.7953 14.8952H53.5234V21.75C58.1846 21.0141 61.75 16.9558 61.75 12.0596Z" fill="#585CC6" />
                <path d="M88.1064 21C96.029 21 100.363 14.0741 100.363 8.0699C100.363 7.8752 100.359 7.67616 100.351 7.48146C101.194 6.83819 101.922 6.04141 102.5 5.12857C101.715 5.49714 100.881 5.73785 100.027 5.84248C100.926 5.27405 101.599 4.38106 101.922 3.32906C101.076 3.85777 100.151 4.23073 99.1868 4.43196C98.537 3.70363 97.6779 3.22139 96.7422 3.0598C95.8066 2.89821 94.8465 3.06626 94.0105 3.53798C93.1745 4.00969 92.5091 4.7588 92.1171 5.66948C91.7252 6.58016 91.6285 7.60169 91.8421 8.57613C90.1297 8.48548 88.4544 8.01622 86.925 7.19877C85.3955 6.38131 84.046 5.23392 82.9638 3.83097C82.4138 4.83129 82.2455 6.01501 82.4932 7.14153C82.7408 8.26805 83.3857 9.25286 84.2969 9.89579C83.6128 9.87288 82.9437 9.6786 82.3449 9.32899V9.38523C82.3443 10.435 82.6883 11.4526 83.3185 12.265C83.9487 13.0775 84.8262 13.6346 85.8017 13.8418C85.168 14.0247 84.503 14.0513 83.858 13.9197C84.1333 14.8225 84.6689 15.6121 85.39 16.1783C86.1112 16.7446 86.982 17.0592 87.8808 17.0782C86.3549 18.3427 84.4699 19.0285 82.5295 19.0253C82.1854 19.0247 81.8416 19.0025 81.5 18.9586C83.4712 20.2927 85.7643 21.0013 88.1064 21Z" fill="#585CC6" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M141.75 12C141.75 17.3848 137.385 21.75 132 21.75C126.615 21.75 122.25 17.3848 122.25 12C122.25 6.61522 126.615 2.25 132 2.25C137.385 2.25 141.75 6.61522 141.75 12ZM137.075 10.5744C137.862 10.5744 138.5 11.213 138.5 11.9998C138.5 12.5814 138.147 13.0831 137.679 13.3112C137.702 13.4481 137.714 13.5849 137.714 13.7331C137.714 15.9226 135.171 17.6902 132.023 17.6902C128.876 17.6902 126.333 15.9226 126.333 13.7331C126.333 13.5849 126.344 13.4367 126.367 13.2998C125.865 13.0717 125.523 12.5814 125.523 11.9998C125.523 11.213 126.162 10.5744 126.949 10.5744C127.325 10.5744 127.678 10.734 127.929 10.9735C128.91 10.2551 130.267 9.81034 131.784 9.76473L132.502 6.36648C132.525 6.29806 132.559 6.24104 132.616 6.20683C132.673 6.17262 132.742 6.16122 132.81 6.17262L135.171 6.67437C135.33 6.33227 135.672 6.1042 136.071 6.1042C136.63 6.1042 137.086 6.56034 137.086 7.11911C137.086 7.67788 136.63 8.13402 136.071 8.13402C135.524 8.13402 135.079 7.70069 135.057 7.16473L132.947 6.71999L132.297 9.76473C133.779 9.82174 135.125 10.2779 136.094 10.9735C136.345 10.7226 136.687 10.5744 137.075 10.5744ZM129.765 11.9998C129.207 11.9998 128.75 12.456 128.75 13.0147C128.75 13.5735 129.207 14.0296 129.765 14.0296C130.324 14.0296 130.78 13.5735 130.78 13.0147C130.78 12.456 130.324 11.9998 129.765 11.9998ZM132.012 16.4358C132.4 16.4358 133.722 16.3902 134.418 15.6946C134.521 15.5919 134.521 15.4323 134.441 15.3182C134.338 15.2156 134.167 15.2156 134.064 15.3182C133.62 15.7516 132.696 15.9112 132.023 15.9112C131.35 15.9112 130.415 15.7516 129.982 15.3182C129.879 15.2156 129.708 15.2156 129.606 15.3182C129.503 15.4209 129.503 15.5919 129.606 15.6946C130.29 16.3788 131.624 16.4358 132.012 16.4358ZM133.221 13.0147C133.221 13.5735 133.677 14.0296 134.236 14.0296C134.794 14.0296 135.25 13.5735 135.25 13.0147C135.25 12.456 134.794 11.9998 134.236 11.9998C133.677 11.9998 133.221 12.456 133.221 13.0147Z" fill="#585CC6" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M181.75 12C181.75 17.3848 177.385 21.75 172 21.75C166.615 21.75 162.25 17.3848 162.25 12C162.25 6.61522 166.615 2.25 172 2.25C177.385 2.25 181.75 6.61522 181.75 12ZM172.348 9.44812C171.4 9.84257 169.505 10.659 166.662 11.8973C166.201 12.0809 165.959 12.2604 165.937 12.436C165.9 12.7327 166.271 12.8495 166.777 13.0087C166.846 13.0303 166.917 13.0527 166.991 13.0765C167.488 13.2383 168.158 13.4276 168.506 13.4351C168.822 13.442 169.174 13.3118 169.563 13.0446C172.219 11.2519 173.59 10.3458 173.676 10.3263C173.737 10.3125 173.821 10.2952 173.878 10.3459C173.935 10.3965 173.929 10.4925 173.923 10.5182C173.887 10.6752 172.428 12.0312 171.673 12.7329C171.438 12.9517 171.271 13.1069 171.237 13.1423C171.16 13.2217 171.082 13.2968 171.008 13.369C170.545 13.8148 170.198 14.1492 171.027 14.6951C171.425 14.9575 171.744 15.1745 172.061 15.3909C172.408 15.6273 172.755 15.8631 173.203 16.1567C173.317 16.2315 173.426 16.3092 173.532 16.3849C173.936 16.6729 174.299 16.9316 174.747 16.8904C175.008 16.8664 175.277 16.6214 175.414 15.8908C175.737 14.164 176.371 10.4227 176.518 8.88103C176.531 8.74596 176.515 8.57309 176.502 8.49721C176.489 8.42133 176.462 8.31321 176.363 8.23317C176.246 8.13838 176.066 8.11839 175.985 8.11981C175.619 8.12627 175.056 8.32191 172.348 9.44812Z" fill="#585CC6" />
            </svg>
        )
    } else if (props.name == 'Hide') {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.76045 14.3668C9.18545 13.7928 8.83545 13.0128 8.83545 12.1378C8.83545 10.3848 10.2474 8.9718 11.9994 8.9718C12.8664 8.9718 13.6644 9.3228 14.2294 9.8968" stroke="#585CC6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.1046 12.699C14.8726 13.989 13.8566 15.007 12.5676 15.241" stroke="#585CC6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.65451 17.4724C5.06751 16.2264 3.72351 14.4064 2.74951 12.1374C3.73351 9.85835 5.08651 8.02835 6.68351 6.77235C8.27051 5.51635 10.1015 4.83435 11.9995 4.83435C13.9085 4.83435 15.7385 5.52635 17.3355 6.79135" stroke="#585CC6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.4475 8.99084C20.1355 9.90484 20.7405 10.9598 21.2495 12.1368C19.2825 16.6938 15.8065 19.4388 11.9995 19.4388C11.1365 19.4388 10.2855 19.2988 9.46753 19.0258" stroke="#585CC6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.8868 4.24963L4.11279 20.0236" stroke="#585CC6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        )
    } else if (props.name == 'Info Square') {
        return (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6117 2.29175H6.38758C3.87008 2.29175 2.29175 4.07425 2.29175 6.59675V13.4034C2.29175 15.9259 3.86258 17.7084 6.38758 17.7084H13.6109C16.1367 17.7084 17.7084 15.9259 17.7084 13.4034V6.59675C17.7084 4.07425 16.1367 2.29175 13.6117 2.29175Z" stroke="#585CC6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.99552 13.3335V10.0001" stroke="#585CC6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.9916 6.83695H9.99993" stroke="#585CC6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        )
    } else if (props.name == 'jpg 1') {
        return (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0C6.0375 0 5.25 0.7875 5.25 1.75V26.25C5.25 27.2125 6.0375 28 7 28H24.5C25.4625 28 26.25 27.2125 26.25 26.25V7L19.25 0H7Z" fill="#C2C4FF" />
                <path d="M21 7H26.25L19.25 0V5.25C19.25 6.2125 20.0375 7 21 7Z" fill="#797DDF" />
                <path d="M26.25 12.25L21 7H26.25V12.25Z" fill="#C2C4FF" />
                <path d="M22.75 22.75C22.75 23.2312 22.3563 23.625 21.875 23.625H2.625C2.14375 23.625 1.75 23.2312 1.75 22.75V14C1.75 13.5187 2.14375 13.125 2.625 13.125H21.875C22.3563 13.125 22.75 13.5187 22.75 14V22.75Z" fill="#585CC6" />
                <path d="M7.76384 16.581C7.76384 15.993 8.68783 15.993 8.68783 16.581V19.3443C8.68783 20.4433 8.16284 21.1083 6.95271 21.1083C6.35771 21.1083 5.86159 20.9464 5.42759 20.3873C5.07059 19.9603 5.74259 19.3451 6.10659 19.7923C6.40059 20.1563 6.71559 20.2403 7.02271 20.2263C7.41384 20.2123 7.75771 20.0364 7.76471 19.3443V16.581H7.76384Z" fill="white" />
                <path d="M9.91748 16.5783C9.91748 16.3473 10.0995 16.0953 10.3935 16.0953H12.0096C12.9196 16.0953 13.7386 16.7043 13.7386 17.8716C13.7386 18.9776 12.9196 19.5936 12.0096 19.5936H10.8415V20.5176C10.8415 20.8256 10.6455 20.9997 10.3935 20.9997C10.1625 20.9997 9.91748 20.8256 9.91748 20.5176V16.5783ZM10.8415 16.9765V18.7195H12.0096C12.4786 18.7195 12.8496 18.3056 12.8496 17.8716C12.8496 17.3825 12.4786 16.9765 12.0096 16.9765H10.8415Z" fill="white" />
                <path d="M18.7347 20.4628C18.2377 20.8758 17.6287 21.0508 17.0136 21.0508C15.5436 21.0508 14.5015 20.2117 14.5015 18.5457C14.5015 17.1334 15.6005 16.0353 17.0757 16.0353C17.6287 16.0353 18.2368 16.2234 18.6708 16.6504C19.097 17.0695 18.4818 17.6925 18.0627 17.3224C17.8037 17.0704 17.4397 16.8814 17.0757 16.8814C16.2296 16.8814 15.4115 17.5595 15.4115 18.5457C15.4115 19.5817 16.0966 20.2117 17.0136 20.2117C17.4397 20.2117 17.8037 20.0848 18.0627 19.8967V19.0365H17.0136C16.3906 19.0365 16.4536 18.1825 17.0136 18.1825H18.4127C18.6717 18.1825 18.9088 18.3785 18.9088 18.5955V20.0857C18.9088 20.2117 18.8537 20.3289 18.7347 20.4628Z" fill="white" />
                <path d="M21.875 23.625H5.25V24.5H21.875C22.3563 24.5 22.75 24.1063 22.75 23.625V22.75C22.75 23.2313 22.3563 23.625 21.875 23.625Z" fill="#C2C4FF" />
            </svg>
        )
    } else if (props.name == 'Male') {
        return (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2477 2.14369L8.67744 3.6417L8.98069 4.77034L13.1897 3.63714L9.38427 10.2243C7.26119 9.32653 4.75939 10.07 3.59743 12.0825C2.33741 14.265 3.139 17.0833 5.35765 18.3642C7.57629 19.6451 10.4203 18.9323 11.6803 16.7499C12.8419 14.738 12.2323 12.2004 10.3943 10.8103L14.1998 4.22084L15.3216 8.42986L16.4502 8.12889L14.9636 2.55638L14.8228 2L14.2477 2.14369ZM9.33411 11.4783C8.7017 11.1132 8.00964 10.9614 7.3436 10.9995C6.23353 11.063 5.19261 11.6529 4.6075 12.6662C3.67133 14.2878 4.25493 16.3804 5.94135 17.3541C7.62775 18.3277 9.73179 17.7877 10.668 16.1662C11.6041 14.5446 11.0205 12.4519 9.33411 11.4783Z" fill="#585CC6" stroke="#585CC6" />
            </svg>
        )
    } else if (props.name == 'pet 1') {
        return (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_33_463)">
                    <path d="M30.7733 20L29.3333 11.88C29.2533 11.1466 28.68 10.5466 27.5867 9.93329C27.3743 9.60873 27.0937 9.33441 26.7643 9.12946C26.435 8.92451 26.065 8.79386 25.68 8.74663C25.3237 8.15636 24.7574 7.72257 24.0948 7.53218C23.4321 7.34178 22.722 7.40886 22.1067 7.71996C21.8264 7.34426 21.452 7.04907 21.0213 6.86415C20.5906 6.67923 20.1188 6.6111 19.6533 6.66663C19.413 6.24669 19.0628 5.90006 18.6405 5.6639C18.2182 5.42773 17.7396 5.31093 17.2559 5.326C16.7723 5.34107 16.3019 5.48745 15.8951 5.74945C15.4883 6.01145 15.1604 6.3792 14.9467 6.81329C14.7402 6.73823 14.5252 6.68897 14.3067 6.66663C14.0732 6.25939 13.7363 5.92102 13.3301 5.6857C12.9239 5.45038 12.4628 5.32646 11.9933 5.32646C11.5239 5.32646 11.0628 5.45038 10.6566 5.6857C10.2504 5.92102 9.91352 6.25939 9.68 6.66663C9.27333 6.61246 8.85964 6.65286 8.47112 6.78467C8.08261 6.91649 7.72975 7.13617 7.44 7.42663C7.18853 7.35604 6.92771 7.32457 6.66667 7.33329C5.95942 7.33329 5.28115 7.61425 4.78105 8.11434C4.28095 8.61444 4 9.29272 4 9.99996C4 9.99996 4 10.08 4 10.1333C3.65892 10.2925 3.36033 10.5301 3.1286 10.8267C2.89688 11.1233 2.73859 11.4705 2.66667 11.84L1.22667 20C0.869792 20.2024 0.570084 20.4921 0.355561 20.8419C0.141038 21.1916 0.0187059 21.5901 0 22C0.0142708 22.3138 0.0968231 22.6207 0.241901 22.8994C0.386978 23.178 0.591089 23.4216 0.84 23.6133C0.894413 23.6839 0.962419 23.7428 1.04 23.7866C3.46667 25.68 9.76 26.6666 16 26.6666C22.24 26.6666 28.5333 25.68 30.96 23.7733C31.0376 23.7295 31.1056 23.6705 31.16 23.6C31.4072 23.4097 31.6104 23.1682 31.7554 22.892C31.9004 22.6158 31.9838 22.3115 32 22C31.9813 21.5901 31.859 21.1916 31.6444 20.8419C31.4299 20.4921 31.1302 20.2024 30.7733 20ZM5.04 11.08C5.16603 11.0035 5.26318 10.8875 5.31625 10.75C5.36933 10.6125 5.37533 10.4612 5.33333 10.32C5.32049 10.2137 5.32049 10.1062 5.33333 9.99996C5.33373 9.76741 5.39495 9.539 5.51091 9.33742C5.62687 9.13584 5.79353 8.96809 5.99436 8.85083C6.19518 8.73357 6.42319 8.67087 6.65573 8.66897C6.88828 8.66706 7.11728 8.72601 7.32 8.83996C7.46944 8.92448 7.64573 8.94808 7.81214 8.90586C7.97856 8.86363 8.12226 8.75884 8.21333 8.61329C8.38024 8.35299 8.63242 8.15878 8.92673 8.06392C9.22104 7.96906 9.53917 7.97945 9.82667 8.09329C9.9107 8.12009 9.99921 8.12994 10.0871 8.12229C10.1749 8.11463 10.2604 8.08962 10.3385 8.04869C10.4167 8.00777 10.4859 7.95175 10.5422 7.88387C10.5986 7.816 10.6408 7.73763 10.6667 7.65329C10.744 7.38287 10.9049 7.14385 11.1264 6.97041C11.3478 6.79696 11.6184 6.69798 11.8995 6.68763C12.1806 6.67727 12.4577 6.75607 12.6913 6.91275C12.9249 7.06943 13.1029 7.29597 13.2 7.55996C13.2636 7.69306 13.3639 7.8052 13.4891 7.88316C13.6143 7.96112 13.7592 8.00165 13.9067 7.99996C14.2527 7.99428 14.5874 8.12338 14.84 8.35996C14.9308 8.45985 15.0498 8.52983 15.1812 8.56065C15.3126 8.59146 15.4503 8.58165 15.576 8.53251C15.7017 8.48338 15.8096 8.39723 15.8853 8.28548C15.961 8.17372 16.001 8.04161 16 7.90663C15.9664 7.55301 16.0747 7.20052 16.301 6.92672C16.5273 6.65292 16.853 6.48022 17.2067 6.44663C17.5603 6.41303 17.9128 6.52129 18.1866 6.74759C18.4604 6.97388 18.6331 7.29967 18.6667 7.65329C18.6917 7.74394 18.7357 7.82826 18.7957 7.90071C18.8556 7.97316 18.9303 8.0321 19.0146 8.07366C19.099 8.11521 19.1912 8.13845 19.2852 8.14183C19.3792 8.14522 19.4729 8.12867 19.56 8.09329C19.7245 8.02906 19.9001 7.99813 20.0766 8.0023C20.2531 8.00648 20.4271 8.04568 20.5883 8.11762C20.7496 8.18956 20.8949 8.29282 21.016 8.4214C21.137 8.54998 21.2313 8.70132 21.2933 8.86663C21.3319 8.975 21.3978 9.07156 21.4847 9.14692C21.5716 9.22228 21.6765 9.27388 21.7892 9.29669C21.902 9.31951 22.0187 9.31277 22.1281 9.27713C22.2374 9.24149 22.3357 9.17816 22.4133 9.09329C22.5699 8.92706 22.7665 8.80381 22.9844 8.73537C23.2022 8.66693 23.434 8.65559 23.6575 8.70243C23.881 8.74927 24.0887 8.85272 24.2607 9.00288C24.4328 9.15303 24.5634 9.34485 24.64 9.55996C24.7026 9.691 24.8008 9.80177 24.9234 9.87959C25.0461 9.9574 25.1881 9.99912 25.3333 9.99996C25.5791 9.99572 25.8212 10.0595 26.0329 10.1842C26.2447 10.3089 26.4179 10.4897 26.5333 10.7066C26.6031 10.8302 26.7106 10.9283 26.84 10.9866C27.72 11.4133 28.04 11.7866 28.04 12C28.04 12.9066 23.8 14.6666 16.04 14.6666C8.28 14.6666 4 12.9066 4 12C4 11.8133 4.26667 11.4666 5.04 11.08Z" fill="#585CC6" />
                    <path d="M9.99992 11.9999C10.1767 11.9999 10.3463 11.9297 10.4713 11.8047C10.5963 11.6796 10.6666 11.5101 10.6666 11.3333C10.6666 11.1564 10.7368 10.9869 10.8618 10.8618C10.9869 10.7368 11.1564 10.6666 11.3333 10.6666C11.5101 10.6666 11.6796 10.5963 11.8047 10.4713C11.9297 10.3463 11.9999 10.1767 11.9999 9.99992C11.9999 9.82311 11.9297 9.65354 11.8047 9.52851C11.6796 9.40349 11.5101 9.33325 11.3333 9.33325C10.8028 9.33325 10.2941 9.54397 9.91904 9.91904C9.54397 10.2941 9.33325 10.8028 9.33325 11.3333C9.33325 11.5101 9.40349 11.6796 9.52851 11.8047C9.65354 11.9297 9.82311 11.9999 9.99992 11.9999ZM19.3333 11.9999C19.5101 11.9999 19.6796 11.9297 19.8047 11.8047C19.9297 11.6796 19.9999 11.5101 19.9999 11.3333C19.9999 11.1564 20.0702 10.9869 20.1952 10.8618C20.3202 10.7368 20.4898 10.6666 20.6666 10.6666C20.8434 10.6666 21.013 10.5963 21.138 10.4713C21.263 10.3463 21.3333 10.1767 21.3333 9.99992C21.3333 9.82311 21.263 9.65354 21.138 9.52851C21.013 9.40349 20.8434 9.33325 20.6666 9.33325C20.1362 9.33325 19.6274 9.54397 19.2524 9.91904C18.8773 10.2941 18.6666 10.8028 18.6666 11.3333C18.6666 11.5101 18.7368 11.6796 18.8618 11.8047C18.9869 11.9297 19.1564 11.9999 19.3333 11.9999ZM23.3333 11.9999C23.5101 11.9999 23.6796 12.0702 23.8047 12.1952C23.9297 12.3202 23.9999 12.4898 23.9999 12.6666C23.9999 12.8434 24.0702 13.013 24.1952 13.138C24.3202 13.263 24.4898 13.3333 24.6666 13.3333C24.8434 13.3333 25.013 13.263 25.138 13.138C25.263 13.013 25.3333 12.8434 25.3333 12.6666C25.3333 12.1362 25.1225 11.6274 24.7475 11.2524C24.3724 10.8773 23.8637 10.6666 23.3333 10.6666C23.1564 10.6666 22.9869 10.7368 22.8618 10.8618C22.7368 10.9869 22.6666 11.1564 22.6666 11.3333C22.6666 11.5101 22.7368 11.6796 22.8618 11.8047C22.9869 11.9297 23.1564 11.9999 23.3333 11.9999ZM13.9999 13.3333C14.1767 13.3333 14.3463 13.263 14.4713 13.138C14.5963 13.013 14.6666 12.8434 14.6666 12.6666C14.6666 12.4898 14.7368 12.3202 14.8618 12.1952C14.9869 12.0702 15.1564 11.9999 15.3333 11.9999C15.5101 11.9999 15.6796 11.9297 15.8047 11.8047C15.9297 11.6796 15.9999 11.5101 15.9999 11.3333C15.9999 11.1564 15.9297 10.9869 15.8047 10.8618C15.6796 10.7368 15.5101 10.6666 15.3333 10.6666C14.8028 10.6666 14.2941 10.8773 13.919 11.2524C13.544 11.6274 13.3333 12.1362 13.3333 12.6666C13.3333 12.8434 13.4035 13.013 13.5285 13.138C13.6535 13.263 13.8231 13.3333 13.9999 13.3333Z" fill="#585CC6" />
                </g>
                <defs>
                    <clipPath id="clip0_33_463">
                        <rect width="32" height="32" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        )
    } else if (props.name == 'Show') {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89111 11.9994 8.89111C13.7454 8.89111 15.1614 10.3061 15.1614 12.0531Z" stroke="#585CC6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48885 15.806 4.75085 11.998 4.75085H12.002C8.194 4.75085 4.711 7.48885 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z" stroke="#585CC6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        )
    } else if (props.name == 'Vector') {
        return (
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.91762 4.2107C10.0697 4.2107 11.0037 3.2681 11.0037 2.10535C11.0037 0.942598 10.0697 0 8.91762 0C7.76551 0 6.83154 0.942598 6.83154 2.10535C6.83154 3.2681 7.76551 4.2107 8.91762 4.2107Z" fill="#585CC6" />
                <path d="M8.91762 18C9.60881 18 10.1691 17.4345 10.1691 16.7369C10.1691 16.0393 9.60881 15.4739 8.91762 15.4739C8.22643 15.4739 7.66611 16.0393 7.66611 16.7369C7.66611 17.4345 8.22643 18 8.91762 18Z" fill="#585CC6" />
                <path d="M3.79177 6.14254C4.82874 6.14254 5.66937 5.29414 5.66937 4.24759C5.66937 3.20104 4.82874 2.35264 3.79177 2.35264C2.75479 2.35264 1.91416 3.20104 1.91416 4.24759C1.91416 5.29414 2.75479 6.14254 3.79177 6.14254Z" fill="#585CC6" />
                <path d="M14.0435 15.646C14.6195 15.646 15.0865 15.1747 15.0865 14.5933C15.0865 14.0119 14.6195 13.5406 14.0435 13.5406C13.4674 13.5406 13.0004 14.0119 13.0004 14.5933C13.0004 15.1747 13.4674 15.646 14.0435 15.646Z" fill="#585CC6" />
                <path d="M1.66846 11.1054C2.58992 11.1054 3.33692 10.3515 3.33692 9.42148C3.33692 8.4915 2.58992 7.73761 1.66846 7.73761C0.746994 7.73761 0 8.4915 0 9.42148C0 10.3515 0.746994 11.1054 1.66846 11.1054Z" fill="#585CC6" />
                <path d="M16.1661 10.2624C16.6267 10.2624 17 9.8856 17 9.4208C17 8.956 16.6267 8.5792 16.1661 8.5792C15.7056 8.5792 15.3322 8.956 15.3322 9.4208C15.3322 9.8856 15.7056 10.2624 16.1661 10.2624Z" fill="#585CC6" />
                <path d="M2.75956 13.5529C2.18896 14.1288 2.18896 15.0606 2.75956 15.6364C3.32947 16.2123 4.25406 16.2123 4.82398 15.6364C5.39457 15.0606 5.39457 14.1288 4.82398 13.5529C4.25406 12.9764 3.33015 12.9709 2.75956 13.5529Z" fill="#585CC6" />
                <path d="M14.0428 4.87879C14.3882 4.87879 14.6682 4.59619 14.6682 4.24759C14.6682 3.89899 14.3882 3.61639 14.0428 3.61639C13.6974 3.61639 13.4174 3.89899 13.4174 4.24759C13.4174 4.59619 13.6974 4.87879 14.0428 4.87879Z" fill="#585CC6" />
            </svg>
        )
    } else if (props.name == 'ilink') {
        return (
            <svg width="86" height="33" viewBox="0 0 86 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M69.9616 32.1894H62.2314V1.07302H69.8828V18.2848C70.9652 18.5933 71.6646 18.4839 72.2393 17.5113C73.3923 15.5628 74.6696 13.6821 75.9415 11.8014C76.049 11.6351 76.1899 11.4917 76.3564 11.3802C76.5229 11.2686 76.7106 11.1913 76.9091 11.1527H84.979L78.4928 20.5889C78.284 20.8182 78.1706 21.1149 78.1755 21.4209C78.1805 21.7269 78.3025 22.0202 78.5185 22.2431C80.609 25.115 83.3777 29.2913 85.4286 32.1894H79.6013C79.6013 32.1894 76.522 32.3203 75.1822 29.6444C74.157 27.9431 73.2569 26.6018 72.2042 25.1183C72.0768 24.9388 72.0674 24.8135 71.8257 24.5862C71.6646 24.4348 71.4747 24.3159 71.2658 24.2363C71.0575 24.1567 70.8347 24.1179 70.6106 24.1222C70.3864 24.1266 70.1655 24.174 69.9607 24.2617L69.9616 32.1894ZM58.2394 32.1894H50.5385V30.9004C50.534 27.4308 50.534 23.9608 50.5385 20.4904C50.5385 18.531 49.944 17.4949 48.5182 17.0212C47.6946 16.7752 46.8152 16.7684 45.988 17.0017C45.1604 17.2349 44.4215 17.698 43.8617 18.334C43.647 18.6859 43.5454 19.092 43.57 19.5004C43.5497 23.1458 43.5587 26.7901 43.5587 30.4409V32.1894H35.8567V11.1724H42.581L42.7162 13.3102C43.0316 13.0585 43.2219 12.9163 43.4021 12.7631C44.7468 11.5686 46.4228 10.7836 48.2221 10.5054C50.0219 10.227 51.8657 10.4677 53.526 11.1975C54.9198 11.7091 56.1165 12.6271 56.9527 13.8254C57.7885 15.0237 58.2223 16.4438 58.1944 17.891C58.1944 17.891 58.2394 27.3986 58.2394 32.1894ZM19.9379 32.1894H12.344V6.01956e-08H19.9379V32.1894ZM0.640866 11.1582H8.23925V32.1894H0.640866V11.1582ZM24.1212 11.1582H31.7274V32.1894H24.1212V11.1582ZM4.47047 8.20419C3.8974 8.2366 3.32355 8.15523 2.78394 7.96504C2.24433 7.77489 1.75027 7.4799 1.33193 7.09809C0.913586 6.71632 0.579725 6.25568 0.350733 5.74443C0.12174 5.23314 0.00241168 4.68188 3.618e-05 4.1243C-0.00233932 3.56673 0.112287 3.01455 0.336915 2.50144C0.561543 1.98833 0.89147 1.52506 1.30654 1.13991C1.72162 0.754768 2.21314 0.455817 2.75111 0.261311C3.28909 0.0668051 3.86222 -0.0191603 4.43554 0.00863054C7.12303 0.00097215 8.88013 1.59061 8.89026 4.03692C8.92928 4.60485 8.84062 5.17426 8.6304 5.70558C8.42022 6.2369 8.09357 6.71748 7.67309 7.11391C7.2526 7.51039 6.74836 7.81325 6.19533 8.00152C5.6423 8.18979 5.05376 8.25896 4.47047 8.20419ZM27.8922 8.20419C27.0692 8.15492 26.2791 7.87289 25.619 7.3929C24.9589 6.91295 24.4578 6.2559 24.1773 5.50278C23.8968 4.74966 23.8492 3.93326 24.0403 3.15418C24.2315 2.37509 24.653 1.66734 25.253 1.11801C25.8531 0.568689 26.6054 0.201814 27.4174 0.0625519C28.2294 -0.0767098 29.0655 0.0177224 29.823 0.33423C30.5804 0.650739 31.226 1.17548 31.6803 1.84387C32.1345 2.51226 32.3776 3.29512 32.3796 4.09602C32.4039 4.66418 32.302 5.23073 32.0809 5.75722C31.8597 6.28371 31.5244 6.75776 31.0978 7.14722C30.6713 7.53664 30.1633 7.83234 29.6087 8.01417C29.054 8.19596 28.4655 8.25967 27.8832 8.20088L27.8922 8.20419Z" fill="#585CC6" />
            </svg>
        )
    } else if (props.name == 'academy') {
        return (
            <svg width="86" height="13" viewBox="0 0 86 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.70952 12.8352L3.59713 10.0872H7.91251L8.80012 12.8352H11.5096L7.38696 0.783787H4.12851L0 12.8352H2.70952ZM4.23947 8.0982L5.71102 3.53773H5.80445L7.276 8.0982H4.23947Z" fill="#585CC6" />
                <path d="M23.1034 5.00296C22.7706 2.2196 20.68 0.619019 17.9121 0.619019C14.753 0.619019 12.3412 2.86689 12.3412 6.8095C12.3412 10.7403 14.7121 13 17.9121 13C20.9779 13 22.829 10.9463 23.1034 8.72784L20.5457 8.71607C20.3063 10.0048 19.3019 10.7462 17.953 10.7462C16.1369 10.7462 14.9048 9.3869 14.9048 6.8095C14.9048 4.30271 16.1194 2.87278 17.9705 2.87278C19.3545 2.87278 20.353 3.67895 20.5457 5.00296H23.1034Z" fill="#585CC6" />
                <path d="M26.9175 12.8352L27.8051 10.0872H32.1205L33.0081 12.8352H35.7177L31.595 0.783787H28.3365L24.208 12.8352H26.9175ZM28.4475 8.0982L29.919 3.53773H30.0125L31.484 8.0982H28.4475Z" fill="#585CC6" />
                <path d="M41.561 12.8352C45.2048 12.8352 47.4122 10.5638 47.4122 6.79773C47.4122 3.04343 45.2048 0.783787 41.596 0.783787H37.3215V12.8352H41.561ZM39.85 10.6521V2.96693H41.4617C43.7041 2.96693 44.8895 4.12029 44.8895 6.79773C44.8895 9.48694 43.7041 10.6521 41.4559 10.6521H39.85Z" fill="#585CC6" />
                <path d="M49.4496 12.8352H57.5315V10.7344H51.9781V7.85694H57.0935V5.75617H51.9781V2.88455H57.5081V0.783787H49.4496V12.8352Z" fill="#585CC6" />
                <path d="M59.6828 0.783787V12.8352H62.1354V4.96177H62.2347L65.3296 12.7764H66.9997L70.0946 4.99119H70.1939V12.8352H72.6465V0.783787H69.5282L66.2347 8.88084H66.0946L62.8011 0.783787H59.6828Z" fill="#585CC6" />
                <path d="M74.1934 0.783787L78.5555 8.57484V12.8352H81.0665V8.57484L85.4286 0.783787H82.5965L79.8694 5.9739H79.7526L77.0256 0.783787H74.1934Z" fill="#585CC6" />
            </svg>
        )
    } else {
        return (<svg></svg>)
    }
}

export default IconComponent;