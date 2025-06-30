import {
  RiReactjsFill,
  RiHtml5Fill,
  RiNextjsFill,
  RiCss3Fill,
  RiTailwindCssFill,
  RiJavascriptFill,
  RiNodejsFill,
} from "react-icons/ri";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = [
  {
    icon: <RiReactjsFill />,
    name: "React.js",
  },
  {
    icon: <RiHtml5Fill />,
    name: "HTML 5",
  },
  {
    icon: <RiCss3Fill />,
    name: "Css 3",
  },
  {
    icon: <RiNextjsFill />,
    name: "Next.js",
  },
  {
    icon: <RiTailwindCssFill />,
    name: "Tailwind CSS",
  },
  {
    icon: <RiJavascriptFill />,
    name: "Javascript",
  },
  {
    icon: <RiNodejsFill />,
    name: "Node.js",
  },
];

const Skills = () => {
  return (
    <div>
      <h2 className="h2 mb-8">
        My <span className="text-[#5810ff]">Skills</span>
      </h2>
      <div className="flex flex-wrap gap-6 max-w-sm xl:max-w-none">
        {skills.map((item, index) => {
          return (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger className="w-16 h-16 rounded-full flex items-center justify-center bg-[#201837]/70 group">
                  <div className="text-3xl group-hover:text-[#5810ff] transition-all duration-300">
                    {item.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-lg">{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
