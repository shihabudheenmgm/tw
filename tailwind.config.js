module.exports = {
    mode: 'jit',
    darkMode: 'class',
    content: [
        "./layouts/*.html",
        "./layouts/assets/js/*.{js,jsx,ts,tsx}",
        './layouts/assets/css/*.css'
    ],
    theme: {
        extend: {
            colors: {
                grey:{
                    'head': '#f7f7f7',
                    'br': '#e6e6e6',
                    'dark': '#333333',
                    'dial': '#f2f2f2',
                    'drop': '#DBDBDB',
                    'drb': '#DAD9D9',                    
                    'sub': '#4F4F4F',                    
                    'ft': '#ececec',                    
                },
                'sublue': '#1787e0',
                'bover': '#0368a7',
                'green': '#039700',
                'busy': '#C02C2C',
                'away': '#F1A256',
                'acw': '#8D52F8',
                'break': '#1787E0',
                dark:{
                    'body': '#13181f',
                    'head': '#1A202C',
                    'cts': '#171C26',
                    'ft': '#0D1015',
                    'tb': '#283143',
                    'dial': '#141820',
                    'db': '#252D3D',
                },
                'red': '#ff4040',
            },
            spacing: {
                '30': '7.5rem',
                '25': '6.25rem',
                'btn': '1.438rem',
                '0.7': '0.188rem',
                '1/15': '0.938rem',
                '15': '3.75rem',
                '11/5': '45px',
                '4/7': '17px',
                '4/2': '1.125rem',
                '73': '73px',
                '34': '2.125rem',
                '590': '590px',
                '6/2': '0.375rem',
                '7/2': '1.875rem',
                '131': '8.188rem',
                '141': '8.813rem',
                '214': '13.375rem',
                '50': '3.125rem',
            },
            backgroundImage:{
                'dropb': "url('../images/drop-dark-icon.svg')",
                'dropw': "url('../images/drop-white-icon.svg')",
                'tick': "url('../images/tick.svg')",
            },
            zIndex: {
                '1': '1',
                '2': '2',
                'xmax': '1003',
                'max': '1001',
                '999': '999',
                '998': '998',
            },
            borderRadius: {
                '5': '5px'
            },
            fontSize: {
                '11': '0.688rem',
                'xsm': '0.563rem',
                '21': '1.313rem',
            },
            maxWidth: {
                '200': '12.5rem',
                '413': '25.813rem',
                'winsize': '505px',
            },
            boxShadow: {
                '3xl': '0px 4px 8px rgba(0, 0, 0, 0.05);',
            },
            borderWidth:{
                '6': '6px',
                '3': '3px'
            },
            backgroundSize: {
                '50': '50%',
                '70': '70%',
                '16': '4rem',
            },
        },
        fontFamily: {
            'primary': ["'Poppins'"],
        },
        backgroundPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
            'top-4': 'center top 1rem',
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}