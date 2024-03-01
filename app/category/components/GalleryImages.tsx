import { FeaturesItem } from "@/app/types/dataType";
import ResImage from "./ResImage";

function GalleryImages({ features }: { features: FeaturesItem[] }) {
  return (
    <div className="mt-20">
      {features.map((item) => {
        return (
          <div className="container mx-auto p-6 md:px-10 gallery-container gap-6">
            <div className="rounded-lg overflow-hidden gallery-first ">
              <ResImage
                alt={""}
                mobile={item.gallery.first.mobile}
                tablet={item.gallery.first.tablet}
                desktop={item.gallery.first.desktop}
              />
            </div>
            <div className="rounded-lg overflow-hidden gallery-second">
              <ResImage
                alt={""}
                mobile={item.gallery.second.mobile}
                tablet={item.gallery.second.tablet}
                desktop={item.gallery.second.desktop}
              />
            </div>
            <div className="rounded-lg overflow-hidden gallery-third">
              <ResImage
                alt={""}
                mobile={item.gallery.third.mobile}
                tablet={item.gallery.third.tablet}
                desktop={item.gallery.third.desktop}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GalleryImages;
