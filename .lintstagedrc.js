module.exports = {
    './src/**/*.js': [
        // 'prettier --config ./.prettierrc.json --check',
        'eslint --no-error-on-unmatched-pattern'
    ],
    './src/**/*.jsx': [
        // 'prettier --config ./.prettierrc.json --check',
        // 'eslint --no-error-on-unmatched-pattern'
    ],
    './src/**/*.css': [
        'prettier --config ./.prettierrc.json --check'
    ],
    './src/**/*.less': [
        'prettier --config ./.prettierrc.json --check'
    ]
};