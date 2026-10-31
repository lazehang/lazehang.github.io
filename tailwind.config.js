module.exports = {
    content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                ground: 'var(--ground)',
                surface: 'var(--surface)',
                'surface-2': 'var(--surface-2)',
                ink: 'var(--ink)',
                muted: 'var(--muted)',
                accent: 'var(--accent)',
            },
            fontFamily: {
                sans: ['Poppins', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                media: 'var(--radius-media)',
                control: 'var(--radius-control)',
            },
        },
    },
    plugins: [],
}
