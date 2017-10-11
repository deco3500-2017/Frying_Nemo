import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

// Component transition animations
export const slideInDownAnimation: AnimationEntryMetadata =
    trigger('slideInAnimation', [
        state('*',
            style({
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 1,
                transform: 'translateX(0)'
            })
        ),
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            animate('0.3s')
        ]),
        transition(':leave', [
            animate('0.8s', style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }))
        ])
    ]);

export const fadeInAnimation: AnimationEntryMetadata =
    trigger('fadeInAnimation', [
        // route 'enter' transition
        transition(':enter', [
            // styles at start of transition
            style({
                opacity: 0
            }),
            // animation and styles at end of transition
            animate('.3s', style({
                opacity: 1
            }))
        ]),
        transition(':leave', [
            // styles at start of transition
            style({
                opacity: 1
            }),
            // animation and styles at end of transition
            animate('.3s', style({
                opacity: 0
            }))
        ])
    ]);

export const horizontalSlideAnimation: AnimationEntryMetadata =
    trigger('horizontalSlideAnimation', [
        state('*',
            style({
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 1,
                transform: 'translateX(0)'
            })
        ),
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            animate('0.3s')
        ]),
        transition(':leave', [
            animate('0.3s', style({
                opacity: 1,
                transform: 'translateX(-100%)'
            }))
        ])
    ]);
