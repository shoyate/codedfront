import { memo,useEffect } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Ellipse2Icon2 } from './Ellipse2Icon2.js';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import { FeMessangerIcon } from './FeMessangerIcon.js';
import classes from './Frame3.module.css';
import { LogoIcon } from './LogoIcon.js';
import { animationLinear } from './animation.js'

interface Props {
  className?: string;
}
/* @figmaId 30:360 */
export const Frame3: FC<Props> = memo(function Frame3(props = {}) {
  useEffect(() => {
    animationLinear(document.getElementById("designerid"), 70, 100);
    animationLinear(document.getElementById("developerid"), 70, 100);
  }, []);
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.logo}>
        <LogoIcon className={classes.icon} />
      </div>
      <div id="home" className={classes.header}>
        <a className={classes.home} href="#home">Home</a>
        <a className={classes.about} href="#about">About</a>
        <a className={classes.work} href="#work">Work</a>
        <a className={classes.contact} href="#footer">Contact</a>
      </div>
      <div className={classes.hero}>
        <div className={classes.imCanBayrakDesignerDeveloperBe}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>I’m Can Bayrak - </span>
            <span className={classes.label2}  id="designerid">designer</span>
            <span className={classes.label3}>, </span>
            <span className={classes.label4}  id="developerid">developer</span>
            <span className={classes.label5}> &amp; behavioral researcher.</span>
          </p>
        </div>
        <div className={classes.frame11}>
          <div className={classes.vector}>

            <a className={classes.vector2} href="https://twitter.com/believeinkami"></a>
          </div>
          <div className={classes.vector_3}>
            <a className={classes.vector_32} href="https://instagram.com/shoyate"></a>
          </div>
          <div className={classes.vector_4}>
            <a className={classes.vector_42} href="https://www.youtube.com/channel/UCaHNgAZDDdrbg_uF7qrTOQg"></a>
          </div>
          <div className={classes.vector_2}>
            <a className={classes.vector_22} href="https://www.linkedin.com/in/ycanbayrak"></a>
          </div>
        </div>
      </div>
      <div id="about" className={classes.about2}>
        <div className={classes.about_2}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label6}>Lorem ipsum dolor sit amet, </span>
            <span className={classes.label7}>consectetur</span>
            <span className={classes.label8}> adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. </span>
            <span className={classes.label9}>Pellentesque</span>
            <span className={classes.label10}>
              {' '}
              sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
              Nullam quis{' '}
            </span>
            <span className={classes.label11}>imperdiet augue.</span>
            <span className={classes.label12}> </span>
          </p>
          <div className={classes.textBlock}>
            <p className={classes.labelWrapper3}></p>
          </div>
          <div className={classes.textBlock2}>
            <p className={classes.labelWrapper4}>
              <span className={classes.label13}>Vestibulum</span>
              <span className={classes.label14}> </span>
              <span className={classes.label15}>auctor ornare leo</span>
              <span className={classes.label16}>
                , non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
                Pellentesque commodo lacus at sodales sodales.{' '}
              </span>
              <span className={classes.label17}>Quisque sagittis </span>
              <span className={classes.label18}>
                orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis
                id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
              </span>
            </p>
          </div>
          <div className={classes.textBlock3}>
            <p></p>
          </div>
          <div className={classes.textBlock4}>
            <p></p>
          </div>
        </div>
        <div className={classes.rectangle1}></div>
      </div>
      <div className={classes.frame}>
        <div className={classes.selectedWork}>Selected Work</div>
        <div className={classes.group}>
          <div className={classes.group2}></div>
        </div>
      </div>
      <div id="work" className={classes.selectedWork2}>
        <div className={classes.work1}>
          <div className={classes.frame12}>
            <div className={classes.work12}>Work 1</div>
            <div className={classes.loremIpsumDolorSitAmetConsecte}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.{' '}
            </div>
          </div>
          <div className={classes.rectangle2}></div>
          <div className={classes.rectangle3}></div>
        </div>
        <div className={classes.work13}>
          <div className={classes.frame122}>
            <div className={classes.work14}>Work 2</div>
            <div className={classes.loremIpsumDolorSitAmetConsecte2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.{' '}
            </div>
          </div>
          <div className={classes.rectangle22}></div>
          <div className={classes.rectangle32}></div>
        </div>
        <div className={classes.work15}>
          <div className={classes.frame123}>
            <div className={classes.work16}>Work 3</div>
            <div className={classes.loremIpsumDolorSitAmetConsecte3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.{' '}
            </div>
          </div>
          <div className={classes.rectangle23}></div>
          <div className={classes.rectangle33}></div>
        </div>
      </div>
      <div id="footer" className={classes.footer}>
        <div className={classes.frame8}>
          <div className={classes.frame82}>
            <div className={classes.rectangle8}></div>
            <div className={classes.letsWorkTogether}>Let’s work together!</div>
          </div>
        </div>
        <div className={classes.footer2}>
          <div className={classes.frame5}>
            <div className={classes.frame2}>
              <div className={classes.availableForSelectFreelanceOpp}>
                <div className={classes.textBlock5}>Available for select </div>
                <div className={classes.textBlock6}>freelance opportunities.</div>
              </div>
              <div className={classes.haveAnExcitingProjectYouNeedHe}>
                <div className={classes.textBlock7}>Have an exciting project you need help with?</div>
                <div className={classes.textBlock8}>Send me an email or contact me via instant message!</div>
              </div>
              <div className={classes.frame4}>
                <div className={classes.frame3}>
                  <div className={classes.frame6}>
                    <div className={classes.feMessanger}>
                      <FeMessangerIcon className={classes.icon2} />
                    </div>
                    <div className={classes.messageMeNow}>Message me now!</div>
                  </div>
                </div>
              </div>
              <div className={classes.frame7}>
                <div className={classes.helloYcanbayrakCom}>hello@ycanbayrak.com</div>
                <div className={classes.line1}></div>
              </div>
            </div>
          </div>
          <div className={classes.frame83}>
            <div className={classes.frame84}>
              <div className={classes.vector3}>
                <div className={classes.vector4}></div>
              </div>
              <div className={classes.ellipse1}>
                <Ellipse1Icon className={classes.icon3} />
              </div>
            </div>
            <div className={classes.loremIpsumDolorSitAmetConsecte4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
              tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
              Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at
              sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu
              eros, eget tempus orci facilisis id.
            </div>
            <div className={classes.cTOYukariAsagiJohnDoe}>CTO @ YukariAsagi - John Doe </div>
          </div>
          <div className={classes.frame124}>
            <div className={classes.frame9}>
              <div className={classes.frame85}>
                <div className={classes.vector5}></div>
                <div className={classes.ellipse2}>
                  <Ellipse2Icon className={classes.icon4} />
                </div>
              </div>
              <div className={classes.loremIpsumDolorSitAmetConsecte5}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.{' '}
              </div>
              <div className={classes.cEOOyleBoyleJohnDoe}>CEO @ OyleBoyle - John Doe </div>
            </div>
            <div className={classes.frame86}>
              <div className={classes.frame87}>
                <div className={classes.vector6}>
                  <div className={classes.vector7}></div>
                </div>
                <div className={classes.ellipse22}>
                  <Ellipse2Icon2 className={classes.icon5} />
                </div>
              </div>
              <div className={classes.loremIpsumDolorSitAmetConsecte6}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.{' '}
              </div>
              <div className={classes.cEOOyleBoyleJohnDoe2}>CEO @ OyleBoyle - John Doe </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
