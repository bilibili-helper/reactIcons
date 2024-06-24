import * as React from 'react';
import {IconProps} from '../types';
import * as PropTypes from 'prop-types';

export const CatPinkIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({color = 'currentColor', iconType = 'AcgHelper', ...props}, forwardedRef) => {
        return <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}><defs><linearGradient x1="-11.588%" y1="-16.968%" x2="112.438%" y2="117.239%" id="a"><stop stopColor="#FFA5BF" offset="0%"/><stop stopColor="#FB7299" offset="100%"/></linearGradient></defs><path d="M3.869 1.022c-.352.095-.49.46-.649.751-.192.35-.369.709-.531 1.074a16.03 16.03 0 0 0-.823 2.305c-.215.785-.37 1.585-.459 2.394-.044.406-.07.813-.085 1.22a9.334 9.334 0 0 0-.006.342v.006c0 .217.008.434.03.65.067.671.298 1.316.666 1.881.358.55.833 1.012 1.384 1.366 1.164.747 2.573.989 3.93.989h.095a9.022 9.022 0 0 0 2.045-.238 5.96 5.96 0 0 0 1.748-.711c.26-.163.488-.368.731-.554.227-.173.387-.341.613-.465a.23.23 0 0 1 .233 0 .218.218 0 0 1 .042.305c-.095.124-.26.103-.384.174a.409.409 0 0 0 0 .704c.256.144.617-.02.827-.18.241-.186.39-.467.407-.771a.974.974 0 0 0 .001-.054v-.01a1.024 1.024 0 0 0-.321-.748c-.43-.398-1.039-.348-1.554.099-.178.154-.358.297-.536.447a4.23 4.23 0 0 1-.718.49c-.571.3-1.19.5-1.828.593a9.076 9.076 0 0 1-2.292.062 6.38 6.38 0 0 1-1.96-.479 4.085 4.085 0 0 1-1.48-1.07 3.4 3.4 0 0 1-.813-1.779 5.894 5.894 0 0 1-.035-1.014c.016-.405.039-.805.085-1.2.096-.82.26-1.63.488-2.422.226-.783.51-1.548.858-2.284a12.7 12.7 0 0 1 .271-.541c.052-.095.099-.19.154-.283.034-.063.048-.06.072-.063.023-.004.05-.006.106.065.229.301.439.616.629.943.09.195.254.347.455.425.156.022.315.009.464-.04a8.43 8.43 0 0 1 3.015-.038c.305.052.62.183.884-.039.18-.193.331-.412.447-.65.107-.168.22-.33.338-.49.024-.03.093-.157.168-.157.075 0 .133.115.152.149a15.039 15.039 0 0 1 1.752 5.836c.063.724-.05 1.552-.134 1.862-.039.14-.088.284-.055.426a.39.39 0 0 0 .285.275c.141.038.33.008.425-.104.106-.125.15-.289.194-.447.13-.483.14-1.103.121-1.802-.021-.812-.173-1.615-.356-2.407-.186-.808-.437-1.6-.739-2.372a14.047 14.047 0 0 0-1.034-2.118.664.664 0 0 0-.803-.278.977.977 0 0 0-.395.338c-.257.31-.491.64-.7.984-.028.044-.067.113-.08.13-.01.019-.037.076-.076.092a.325.325 0 0 1-.14-.01l-.135-.022a9.925 9.925 0 0 0-1.234-.126 8.465 8.465 0 0 0-1.186.04c-.198.019-.395.045-.593.076l-.172.03a.348.348 0 0 1-.144 0c-.056-.016-.117-.123-.15-.18a8.704 8.704 0 0 0-.673-.959 1.283 1.283 0 0 0-.38-.371.655.655 0 0 0-.463-.047m5.875 4.783a3.096 3.096 0 0 0-.989.273c-.198.096-.476.259-.437.474.046.261.396.273.771.386.476.116.918.342 1.291.66.287.22.676.051.619-.307-.053-.34-.858-.676-1.129-.76.25-.019.5-.007.745.035.293.041.57-.061.536-.443-.025-.29-.422-.362-.813-.362-.224 0-.447.023-.594.044m-6.198.318c-.034.382.243.484.536.443.246-.042.496-.054.745-.036-.27.085-1.075.421-1.129.761-.057.358.332.526.619.307a3.152 3.152 0 0 1 1.291-.66c.376-.113.726-.125.771-.386.04-.215-.24-.378-.437-.474a3.096 3.096 0 0 0-.988-.273 4.552 4.552 0 0 0-.595-.044c-.39 0-.788.072-.813.362" fill="url(#a)" fillRule="evenodd"/></svg>;
    }
);
CatPinkIcon.displayName = 'CatPinkIcon';
CatPinkIcon.propTypes = {iconType: PropTypes.string};
CatPinkIcon.defaultProps = {iconType: 'AcgHelper'};