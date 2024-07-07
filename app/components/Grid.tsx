import { gridItems } from '../data';
import { BentoGrid, BentoGridItem } from './ui';

export const Grid = () => {
	return (
		<section id="about">
			<BentoGrid className="w-full py-20">
				{gridItems.map(
					(
						{
							id,
							title,
							desc,
							className,
							img,
							imgClassName,
							titleClassName,
							spareImg,
						},
						idx,
					) => {
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
