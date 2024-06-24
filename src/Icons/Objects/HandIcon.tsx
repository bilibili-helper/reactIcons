import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const HandIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'Objects', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><path d="M7.654 0c-.79-.008-1.666.466-1.83 1.49v.003c-.042.265-.072.522-.093.774-.337-.593-.805-1.118-1.465-1.35a1.606 1.606 0 0 0-1.73.403 1.82 1.82 0 0 0-.446 1.667l.003.01c.172.671.431 1.306.683 1.908l.066.156c.18.427.352.838.497 1.252-.375-.332-.82-.605-1.436-.665-.414-.041-.8.027-1.125.236-.324.208-.537.52-.674.87l-.003.009c-.203.55-.035 1.209.204 1.666.269.536.691 1.05 1.139 1.54.226.247.467.496.706.743l.007.007c.238.247.475.492.704.74C3.81 12.49 4.5 13.464 4.5 14.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5c0-1.679.302-2.854.727-4.024.138-.38.295-.77.46-1.184.337-.843.711-1.779 1.042-2.9.367-1.239.327-2.133.045-2.762-.287-.638-.794-.935-1.198-1.015-.448-.089-.84-.01-1.15.216a9.026 9.026 0 0 0-.004-.07c-.063-.95-.731-1.638-1.499-1.813a1.635 1.635 0 0 0-1.188.17 1.637 1.637 0 0 0-.323.244C9.215.448 8.4.008 7.654 0Zm-.886 5.305c.016.26.033.532.049.823a.5.5 0 0 1-.992.115l-.077-.436c-.104-.642-.264-1.552-.57-2.36-.316-.834-.73-1.406-1.244-1.587a.608.608 0 0 0-.675.15.82.82 0 0 0-.196.744c.152.59.383 1.163.635 1.764l.068.162c.23.545.47 1.117.65 1.71v.002c.146.484.24.867.315 1.17l.08.322A.5.5 0 0 1 4 8.387a9.518 9.518 0 0 1-.68-.669 56.414 56.414 0 0 1-.122-.13c-.15-.16-.28-.3-.414-.428-.323-.309-.599-.48-.977-.516h-.003c-.242-.025-.389.02-.485.082-.099.063-.198.178-.28.386-.061.173-.023.518.155.857l.004.008c.204.408.548.839.984 1.316.216.236.448.475.688.724l.01.011c.236.244.48.497.718.755.832.903 1.68 1.97 1.866 3.217h6.046c.055-1.565.367-2.732.779-3.865.157-.435.324-.85.495-1.277.327-.817.668-1.669.987-2.75.329-1.11.24-1.738.091-2.068-.144-.321-.37-.422-.48-.444-.243-.048-.343.013-.411.083-.103.104-.2.304-.278.624a8.81 8.81 0 0 0-.159 1.022l-.003.028c-.038.32-.08.677-.164.948a.538.538 0 0 1-.168.274.502.502 0 0 1-.367.118c-.289-.024-.46-.272-.466-.545-.009-.393.023-.79.042-1.182.036-.73.07-1.432.018-2.132V2.83c-.033-.499-.376-.827-.724-.906a.636.636 0 0 0-.466.06c-.132.076-.28.23-.378.53v.004c-.042.123-.084.36-.12.695-.037.323-.064.7-.085 1.082-.02.326-.034.664-.048.968a25.2 25.2 0 0 1-.048.891.528.528 0 0 1-.061.205.48.48 0 0 1-.424.26.508.508 0 0 1-.454-.259c-.06-.11-.066-.24-.07-.366a27.69 27.69 0 0 1-.005-.445c-.003-.342-.003-.729-.003-.838 0-1.044 0-2.056-.092-3.066-.055-.403-.384-.64-.803-.644-.42-.004-.765.227-.833.647-.19 1.232-.128 2.238-.043 3.658Z" fillRule="evenodd"/></svg>;
    }
);
HandIcon.displayName = 'HandIcon';
HandIcon.propTypes = {iconType: PropTypes.string};
HandIcon.defaultProps = {iconType: 'Objects'};