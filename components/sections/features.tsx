import Link from "next/link";

import { features } from "@/config/features-data";
import { featuresSection } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HeaderSection } from "@/components/shared/header-section";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function Features() {
  return (
    <section>
      <div className="pb-6 pt-28">
        <MaxWidthWrapper>
          <HeaderSection
            label={featuresSection.label}
            title={featuresSection.title}
            subtitle={featuresSection.subtitle}
          />

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const CardIcon = Icons[feature.icon || "logo"];
              const CardLinkText = featuresSection.card.ctaText || "Read More";
              const CardLinkIcon =
                Icons[featuresSection.card.ctaIcon || "chevronRight"];
              return (
                <Card key={feature.title}>
                  <CardHeader>
                    <CardTitle>
                      {featuresSection.card.showIcon && (
                        <Badge
                          variant="outline"
                          className="size-12 rounded-2xl"
                        >
                          <CardIcon className="m-auto size-6" />
                        </Badge>
                      )}
                      {featuresSection.card.showTitle && (
                        <span className="ml-2 justify-items-end">
                          {feature.title}
                        </span>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    {feature.description}
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button variant="secondary" size="sm" className="px-4">
                      <Link
                        href={feature.href ? feature.href : "/"}
                        className="flex items-center gap-2"
                      >
                        <span>{CardLinkText}</span>
                        <CardLinkIcon className="size-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
