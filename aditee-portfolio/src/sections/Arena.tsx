import { ArrowUpRight, Star } from 'lucide-react'
import { SocialIcon } from '../components/SocialIcon'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'


function Big({ value, label, tone = 'text-paper' }: { value: string; label: string; tone?: string }) {
  return (
    <div>
      <p className={`font-display text-3xl font-black leading-none sm:text-4xl ${tone}`}>{value}</p>
      <p className="mt-2 font-pixel text-[8px] text-muted">{label}</p>
    </div>
  )
}

export function Arena() {

  return (
    <Section id="arena">
      <SectionHeading
        index="04"
        title="Arena"
        jp="アリーナ"
        kicker="LEADERBOARD"
        blurb="500+ problems solved across platforms, with an 1850 LeetCode contest rating and a 2-star CodeChef profile."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <article className="hud-card hud-corners h-full p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center bg-amber/15 text-amber">
                  <SocialIcon kind="leetcode" size={20} />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-paper">LeetCode</p>
                  <p className="font-mono text-lg leading-none text-muted">@aditeejha</p>
                </div>
              </div>
              <a href="https://leetcode.com/u/aditeejha/" target="_blank" rel="noreferrer" className="flex items-center gap-1 font-pixel text-[9px] text-cyan hover:text-pink">
                OPEN <ArrowUpRight size={12} />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <Big value="1850" label="CONTEST RATING" tone="text-pink" />
              <Big value="500+" label="DSA PROBLEMS · ALL PLATFORMS" tone="text-cyan" />
              <Big value="2★" label="CODECHEF RATING" />
            </div>
            <p className="mt-8 border-t border-line pt-5 font-mono text-lg text-muted">
              I use problem-solving practice to strengthen algorithmic thinking, pattern recognition, and implementation discipline.
            </p>
          </article>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <Reveal delay={0.1}>
            <article className="hud-card h-full p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center bg-pink/15 text-pink">
                    <SocialIcon kind="codechef" size={20} />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-paper">CodeChef</p>
                    <p className="font-mono text-lg leading-none text-muted">@aditee_jha</p>
                  </div>
                </div>
                <a href="https://www.codechef.com/users/aditee_jha" target="_blank" rel="noreferrer" className="font-pixel text-[9px] text-cyan hover:text-pink">
                  OPEN
                </a>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <Big value="2★" label="CODECHEF" tone="text-pink" />
                <Big value="500+" label="TOTAL DSA PROBLEMS" />
              </div>
              <p className="mt-5 flex items-center gap-1 font-mono text-lg text-amber">
                <Star size={14} fill="currentColor" />
                <span className="ml-1 text-muted">Competitive programming practice</span>
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.2}>
            <article className="hud-card h-full p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center bg-cyan/15 text-cyan">
                  <SocialIcon kind="github" size={20} />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-paper">GitHub</p>
                  <p className="font-mono text-lg leading-none text-muted">@aditeejha</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <Big value="GITHUB" label="PROJECT CODE" tone="text-cyan" />
                <Big value="AI + WEB" label="BUILD FOCUS" />
              </div>
              <div className="mt-5 flex gap-4 font-pixel text-[9px]">
                <a href="https://github.com/aditeejha" target="_blank" rel="noreferrer" className="text-cyan hover:text-pink">
                  GITHUB →
                </a>
                <a href="https://codolio.com/profile/aditeejha" target="_blank" rel="noreferrer" className="text-cyan hover:text-pink">
                  CODOLIO →
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>


    </Section>
  )
}
