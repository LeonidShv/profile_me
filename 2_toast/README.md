show(
content: 'string',
options?: {
    variant: 'success' | 'warning' | 'error' | 'info';
    position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'; !!!
    rootElement: HTMLElement;  !!!
    autoHideDuration: number;
}
);

example:
show('warning, bottom-right, .container, 15s', 
        {
            variant: 'warning', 
            position: 'bottom-right', 
            rootElement: '.container', 
            autoHideDuration: '15s' 
        }
    );

show('default toast', {});

(!!!)You can choose a position and rootElement once. If you change position or rootElement, all toasts will change these parameters.

You can call a function without options.
Default arguments:
variant = 'info',
position = 'top-right',
rootElement = '#root',
autoHideDuration = '5s'

