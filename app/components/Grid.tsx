import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '../data';

export const Grid = () => {
	return (
		<section id="about">
			<BentoGrid className="w-full py-20">
				{gridItems.map(
					({
						id,
						title,
						desc,
						className,
						img,
						imgClassName,
						titleClassName,
						spareImg,
					}) => {
						return (
							<BentoGridItem
								id={id}
								key={id}
								itemTitle={title}
								description={desc}
								className={className}
								img={img}
								imgClassName={imgClassName}
								titleClassName={titleClassName}
								spareImg={spareImg}
							/>
						);
					},
				)}
			</BentoGrid>
		</section>
	);
};

export default Grid;
