import {Component, Prop, h} from '@stencil/core';
import {format} from '../../utils/utils';

@Component({
    tag: 'my-component',
    styleUrls: [
        '../../../node_modules/@ids-core/button/dist/button.css',
        'my-component.css'
    ],
    shadow: true
})
export class MyComponent {

    @Prop() first: string;
    @Prop() middle: string;
    @Prop() last: string;

    private getText(): string {
        return format(this.first, this.middle, this.last);
    }

    render() {
        return <button class={'if button'}>Hello, World! I'm {this.getText()}</button>;
    }
}
