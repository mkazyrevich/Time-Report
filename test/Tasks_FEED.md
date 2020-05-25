
###### Sun May 24 11:51:50 MSK 2020
crash_on_pressing_review_after_quizz_LESE_iOS  
LESE_iOS  
a0340591  23:20 Tue Feb 25 2020 speakingpalapps_ios_nda  4.1.288.20200225_LESE_iOS  

    The following discussion is about issues in both LESE_iOS and k12_iOS.  

    So to make some order in the things we want to fix:
        * LESE iOS crash (per log files sent)
        * K12 Android - crash at review write (image of the crash log sent)
        * Other issues - leave as is for now, probably will be sorted out in HSP anyway.

    Important clarification:  
        * K12 had content download issues (but not necessarily crashes) on iPhone 8 and iPad Pro 10.5 inch (no specific unit was provided)

        * LESE had crashes – highest prio  
    
    Discussion with @ArielV_customer:  

        @ArielV_customer:  
        K12 (Test Prep) iOS:         
            We have a distributer that is waiting for the fix so he can present this to some prospective customers. Please do you best to try and fix this quickly. But do not kill yourself 😊 Let me know if you need further details. At least one of the crashes is at re-login.
        
        Stack traces:  
        [log32](./extras/20200523_crash32.crash)
        [log33](./extras/20200523_crash33.crash)
        [log34](./extras/20200523_crash34.crash)
        [log35](./extras/20200523_crash35.crash)

        
        The last log scenario:
            Installed iOS store version.
            First launch - input sp981@s.pal user (Pass: 22590580)  
            And the app crashed at pressing Login

        Not sure the specific user is of any importance, but for the safe side you can try
        
        Attaching the K12 Android crash at the same place
        [Crash_k12_Android.jpg](./extras/20200523_crash_k12_Android.jpg)

        That's the description I've got:  
            Test prep C1 Biodiversity
            After finishing the quiz
            Pressing the REVIEW - CRASHES

        The iOS problem was related to the same unit, even though on a few phones we tested it did not crash there specifically, but in other places.

        On the other hand it's the distributer who thought there might be a problem with the specific unit, so do not consider it as content issue, unless you find more reasons to think so.

        [Forwarded from Vlad Zamskoi. ]
        Looks like we faced sth similar in LESE about 4-5 weeks ago.  
            @VladZams >@IliaShved?: do you remember, were there some similar issues with a list adapter, probably when reinstantiating Activity when transitioning from a background to foreground.
                
                @IliaShved:  

        @ArielV_customer:  
            One thing to clarify, it appears I got confused by not so detailed customer reports. It seems to be both K12 and LESE that make problems. 
            K12 had content download issues on iPhone 8 and iPad Pro 10.5 inch (no specific unit was provided)
            LESE had crashes

        If you can make sense from the logs, please do. If you do no understand what's the problem, let me know and I'll try to check again with the distributer.

        @VladZams: Ok, just to make sure, #LESE_Android wasn't a subject of the issues, correct?
            @ArielV_customer: Most probably not. No need to fix that one for now.
        
        @VladZams: Do you know the iOS version where that took place?
            @ArielV_customer: LESE_iOS version: 4.1.288
        

###### Fri May 22 12:40:19 MSK 2020; i 30m 1h
setup_web_shop_for_production_HSP_iOS
HSP_iOS **to_test**
00b32d72  20:34 Fri May 22 2020 speakingpalapps_ios_nda  HSP: ShopVC - removed unnecessary code - changed annual subscription id - changed web shop url - force RTL for topBarTitle
    
    [link](https://sp-prod-lms-storage.s3-eu-west-1.amazonaws.com/content/public/hsp-shop/shop.html)

###### Fri May 22 12:40:19 MSK 2020; 15m
setup_web_shop_for_production_HSP_Android
HSP_Android **in_coding**
    [link](https://sp-prod-lms-storage.s3-eu-west-1.amazonaws.com/content/public/hsp-shop/shop.html)

###### Fri May 22 12:25:39 MSK 2020; i 30m
add_new_about_html_HSP_iOS
HSP_iOS **to_test**
8575cc16  13:09 Fri May 22 2020 speakingpalapps_ios_nda  HSP: added new web files for About screen
    [link](./extras/AboutHTML.zip)

###### Fri May 22 12:25:39 MSK 2020 mr 30m
add_new_about_html_HSP_Android
HSP_Android **to_test**	
2bd0349 added new About htm. Word button was hidden at all units.
    [link](./extras/AboutHTML.zip)

###### Thu May 21 19:57:47 MSK 2020; i 20m
release_4.2.281.20200521_LESE_Android
LESE_Android **to_test**
149f36ec  20:09 Thu May 21 2020 speakingpal_apps_android_nda  4.2.281.20200521_LESE_Android
    

###### Wed May 20 14:07:58 MSK 2020; i 8h
add_rate_us_popup_LESE_Android
LESE_Android **to_test**
8074dbce  19:56 Thu May 21 2020 speakingpal_apps_android_nda  LESE: userDidHighestRate setter removed
    
    @ArileV:
        [x] UI
            The bold text: Do you love this app?
            The smaller text: Please rate us!
            Buttons:  Submit | Later

        The required logic:
        [x] Show the rating dialog on the first successful dialog completion (on top of the dialog results page)
        [x] Analytics with actual rating 
        [x] On rating of 5 take the use to the PlayStore rating, otherwise ignore

###### Wed May 20 14:07:11 MSK 2020
hide_word_button_within_lessons_list_screen_HSP_Android
HSP_Android **to_test**
2bd0349 added new About htm. Word button was hidden at all units.

###### Wed May 20 13:50:46 MSK 2020; i 20m
release_1.4.9.20200520_HSP_iOS
HSP_iOS **to_test**
f14a9427  14:05 Wed May 20 2020 speakingpalapps_ios_nda  1.4.9.20200520_HSP_iOS
    

###### Wed May 20 13:27:48 MSK 2020; i 25m
release_1.4.4.20200520_HSP_Android
HSP_Android **to_test**
61ffafb2  13:28 Wed May 20 2020 speakingpal_apps_android_nda  1.4.4.20200520_HSP_Android
    

###### Wed May 20 13:00:16 MSK 2020;
add_new_launch_images_HSP_iOS
HSP_iOS **to_code**

###### Tue May 19 14:28:49 MSK 2020; i 5m 5h
add_new_assets_HSP_iOS
HSP_iOS **to_test**
    [link](https://docs.google.com/spreadsheets/d/1_F-KCo9LKOACkaP5rUKxUgS5AO8uSSv_JRfNstXhlzA/edit#gid=0)

    [x] 7 - change CERF icon
    [x] 9 - change "eye" icon for VocabHsp
    [x] 10.1 -  change score stars and red x images

###### Tue May 19 14:00:28 MSK 2020; i 10m mr 4h
add_new_assets_HSP_Android
HSP_Android **to_test**
4516ec6 Tue May 19 20:25:40 2020 Added new resources for vocabhsp unit. Changed logic and layout for vocabhsp.

    [x] 2 - change app icon on splash screen
    [x] 7 - (if such icon exists in K12/LESE applications)
    [x] 9 - change "eye" icon for VocabHsp
    [x] 10.1 - change score stars and red x images


###### Mon May 18 10:43:52 MSK 2020; i 40m
release_1.4.8.20200518_HSP_iOS
HSP_iOS
cf1b8dca  11:26 Mon May 18 2020 speakingpalapps_ios_nda  1.4.8.20200518_HSP_iOS
    

###### Sun May 17 14:35:07 MSK 2020; i 40m 1h 30m 1h 10m 15m 4h
upgrade_frameworks_to_get_rid_of_uiwebview_usage_spBase_iOS
td_spBase_iOS **to_code**
7bd1b93f  00:15 Mon May 18 2020 speakingpalapps_ios_nda  td_spBase: Facebook SDK updated to the latest version
        
    [] GoogleAds sdk
        - done only for HSP; for other apps we should add GADApplicationIdentifier key to Info.plis when they will be provided by @ArielV
    [x] Facebook sdk
    [x] Crashlytics

###### Fri May 15 19:55:32 MSK 2020; i 30m
release_1.4.7.20200515_HSP_iOS
HSP_iOS **to_test**
7fbffe6a  20:23 Fri May 15 2020 speakingpalapps_ios_nda  1.4.7.20200515_HSP_iOS
    

###### Wed May 13 20:12:14 MSK 2020; i 25m
release_2.1.99.20200513_Topica_Android
Topica_Android
d7aeae5b  20:27 Wed May 13 2020 speakingpal_apps_android_nda  2.1.99.20200513_Topica_Android

    
###### Tue May 12 23:28:07 MSK 2020; i 3h 30m v 1h i 2h 30m
fix_reports_Topica_Android
Topica_Android **to_test** **merged into master**
fc20347a  20:00 Wed May 13 2020 speakingpal_apps_android_nda  Topica: fixed UnitStartEnd report - fixed json request schema, "lesson_end" event tracked
    
    
    [x] speak progress (SpeakV3) report
    [x] UnitStart/UnitEnd report
        [x] com/speakingpal/speechtrainer/sp_new_client/sqlite/repositories/ScoresRepository.java:797
            Couldn't read row 0, col 3 from CursorWindow.  Make sure the Cursor is initialized correctly before accessing data from it
            we should use column index received via getColumnIndex() function instead of harcoded ones

        [x] current json request format is invalid. 

            In Topica_Android UnitStart and End event are stored in local DB as the same type of event named "lesson_start_end":  
                ```
                @"type": @"lesson_start_end",
                @"timestamp": <millisSince1970>,
                @"unit_id": <ID>
                ```  

            @ArielV_customer: This should match exactly the format the server expects. Otherwise it’ll just be ignored  
            
            So, there is no differentiation between those 2 events. While in iOS those are 2 separate event_types: "lesson_start" and "lesson_end". In iOS I was the one who worked on it originally, in Android it wasn't the case.

            for `lesson_end` report, it must be like:
                @"type": @"lesson_end",
                @"timestamp": millisSince1970,
                @"unit_id": unitMetadata.unitId

            for `lesson_start`:
                @"type": @"lesson_start",
                @"timestamp": millisSince1970,
                @"unit_id": unitMetadata.unitId  

        [x] fix UnitStartEndReport serialization problem:
            UnitStartEndReport.reportType and BaseReport.type has the same @SerializedName value and Gson raises an exception because of that. Maybe removing reportType property from UnitStartEndReport would be a good idea.
    

###### Tue May 12 23:31:29 MSK 2020; mr 2h 2h 1h 3h 6h
add_support_for_new_unit_type_VocabHSP_HSP_Android
HSP_Android **to_test**
7fa7401d Sun May 17 21:33:57 2020 code refactoring. Hidden imageview at SpUnitDialogUiActivity at "VocabHSP" unit



###### Tue May 12 23:30:17 MSK 2020; i 4h 30m i 5h 6h
add_support_for_new_unit_type_VocabHSP_HSP_iOS
HSP_iOS **to_test**
eddce52a  19:54 Fri May 15 2020 speakingpalapps_ios_nda  HSP: VocabHsp lessons -- word does not scored if user used the hint
    

###### Mon May 11 22:40:29 MSK 2020; i 20m
release_4.1.280.20200511_LESE_Android
LESE_Android **to_test**
09abfc17  22:46 Mon May 11 2020 speakingpal_apps_android_nda  4.1.280.20200511_LESE_Android

###### Mon May 11 17:08:10 MSK 2020 mr 30m
add_hebrew_translations_for_quizzes_hints_HSP_Android
HSP_Android **to_test**	
bc8ce44 Mon May 18 01:13:05 2020 add hebrew strings in project. fixed bug at WriteQuizUiActivityHSP.


###### Mon May 11 16:24:41 MSK 2020; i 30m 3h 30m
incorrect_format_of_speaking_progress_LESE_Android
LESE_Android **to_test**
7807478c  22:38 Mon May 11 2020 speakingpal_apps_android_nda  LESE: fixed incorrect format of speaking progress (keep reports pojos from being obfuscated)

    @ArielV:
    This is an example of what we can see in the server:
    JSON: [{"asr_session_id":"1296480666655628358","client_session_branch":[{},{},{},{}]},{"asr_session_id":"7201205212024079619","client_session_branch":[{},{},{},{}]},{"asr_session_id":"8224747766476094615","client_session_branch":[{},{},{},{}]},{},{},{},{},{},{},{},{}]

    This is what we expect to get:
    JSON: [{"branch_id":1,"unit_id":"3110405","branch_grade":6,"client_session_branch":[{"node_id":16,"grade":6},{"node_id":17,"grade":6},{"node_id":18,"grade":6},{"node_id":19,"grade":
    6}],"type":"branch","timestamp":"1588637077000","practiced_sentences":4,"asr_session_id":"1a50a2a4d6ebc729f08e3579c089afed"}]

###### Mon May 11 14:40:33 MSK 2020; i 35m
add_hebrew_translations_for_quizzes_hints_HSP_iOS
HSP_iOS **to_test**
9c469bbf  15:15 Mon May 11 2020 speakingpalapps_ios_nda  added adjustsFontSizeToFitWidth option for all hint labels within quizzes

    
###### Mon May 4 11:42:47 MSK 2020; i 1h 30m
support_new_speak_quiz_without_answers_suggestions_HSP_iOS
HSP_iOS **in_coding**
eca3362d  16:23 Mon May 11 2020 speakingpalapps_ios_nda  HSP: added UI preparation to hide answer suggestions within SpeakQuiz vc

    [x] UI Layer
    [] Data Layer

###### Mon May 4 11:41:52 MSK 2020; mr 1h
support_new_speak_quiz_without_answers_suggestions_HSP_Android
HSP_Android **in_coding**
3a42ecb0  15:17 Mon May 04 2020 speakingpal_apps_android_nda  Created new speak quiz within hidden answers container. To do: add logic for correct work of this class.

    [x] UI Layer
    [] Data Layer

###### Mon May 4 00:35:02 MSK 2020; i 1h
release_1.3.6.20200504_HSP_iOS
HSP_iOS **to_test**
7a69c484  00:46 Mon May 04 2020 speakingpalapps_ios_nda  1.3.6.20200504_HSP_iOS

###### Sun May 3 19:45:01 MSK 2020; i 45m
release_4.1.289.20200503_LESE_iOS
LESE_iOS **to_test**
919a7fa9  19:44 Sun May 03 2020 speakingpalapps_ios_nda  4.1.289.20200503_LESE_iOS

###### Sun May 3 17:38:58 MSK 2020; i 25m
release_4.1.279.20200503_LESE_Android
LESE_Android **to_test**
985413cc  17:38 Sun May 03 2020 speakingpal_apps_android_nda  4.1.279.20200503_LESE_Android

###### Sun May 3 16:08:00 MSK 2020; i 40m
add_french_and_italian_flags_icons_LESE_Android
LESE_Android **to_code**
83103fdb  17:09 Sun May 03 2020 speakingpal_apps_android_nda  added French and Italian flags icons

###### Sun May 3 16:07:22 MSK 2020; i 25m
add_french_and_italian_flags_icons_LESE_iOS
LESE_iOS **to_test**
e0cb54ad  16:10 Sun May 03 2020 speakingpalapps_ios_nda  added French and Italian flags icons

###### Sun May 3 15:22:20 MSK 2020; i 15m
fix_crash_when_access_camera_on_profile_screen_HSP_iOS
HSP_iOS **to_test**
5e540f8b  15:23 Sun May 03 2020 speakingpalapps_ios_nda  HSP: added camera usage descriptor to Info.plist to prevent crash when accessing to camera

###### Sun May 3 14:50:31 MSK 2020; i 30m
fix_layout_issues_within_dialog_quiz_screen_HSP_iOS
HSP_iOS **to_test**
6d9fb872  14:48 Sun May 03 2020 speakingpalapps_ios_nda  HSP: fixed layout for text answers in dialog quiz screen

###### Sun May 3 14:49:08 MSK 2020; i 20m
fix_log_file_absence_in_mail_attachment_HSP_iOS
HSP_iOS **to_test**
f348b1d1  14:18 Sun May 03 2020 speakingpalapps_ios_nda  HSP: fixed bug with log file attachment absence

###### Tue Apr 28 22:21:52 MSK 2020; i 40m
release_1.2.4.20200428_HSP_iOS
HSP_iOS **to_test**
15325c9a  22:46 Tue Apr 28 2020 speakingpalapps_ios_nda  1.2.4.20200428_HSP_iOS

###### Mon Apr 27 23:47:12 MSK 2020; i 40m
release_1.3.3.20200427_HSP_Android
HSP_Android **to_test**
536cad31  23:46 Mon Apr 27 2020 speakingpal_apps_android_nda  1.3.3.20200427_HSP_Android

###### Mon Apr 27 20:32:44 MSK 2020; i 10m
change_login_background_HSP_iOS
HSP_iOS **to_test**
de379a65  20:33 Mon Apr 27 2020 speakingpalapps_ios_nda  HSP: Login background changed

###### Mon Apr 27 13:10:16 MSK 2020
add_localization_HSP_iOS
HSP_iOS **to_code**

###### Mon Apr 27 13:10:02 MSK 2020; mr 1.5h
add_localization_HSP_Android
HSP_Android **to_code**

###### Mon Apr 27 11:59:53 MSK 2020; i 2h
change_percent_sign_to_score_word_id_11_HSP_iOS
HSP_iOS **to_test**
c5818d0e  22:20 Tue Apr 28 2020 speakingpalapps_ios_nda  HSP: changed percent sign to "score" word within CategoryPreviewCell


###### Mon Apr 27 11:59:16 MSK 2020; mr 30m
change_percent_sign_to_score_word_id_11_HSP_Android
HSP_Android **to_test**
1e32336e Mon Apr 27 12:43:14 2020 percent sign replaced with "score" word in unit menu.


###### Fri Apr 24 13:52:51 MSK 2020; i 9h 4h 8h 2h 15m
migrate_from_uiwebview_to_wkwebview_spBase_iOS
td_spBase_iOS **to_test**
cb9ec43e  16:43 Wed Apr 29 2020 speakingpalapps_ios_nda  td_spBase: removed UIWebView references from old xibs

###### Fri Apr 24 13:41:34 MSK 2020; i 3h 30m 35m 1h
colorize_words_and_add_score_stars_to_speak_quiz_review_id_21_HSP_iOS
HSP_iOS **to_test**
b395e81b  16:02 Thu May 07 2020 speakingpalapps_ios_nda  HSP: added score stars image to speakQuizReview screen

    [x] colorize bad words with red, good words with green (see DialogScript for detailed colors)
    [x] add score stars under correct/incorrect sentnce

###### Fri Apr 24 13:41:34 MSK 2020; mr 3h 1h 2h
colorize_words_and_add_score_stars_to_speak_quiz_review_id_21_HSP_Android
HSP_Android **to_test**

    [x] colorize bad words with red, good words with green (see DialogScript for detailed colors)      67d5b3e Sat Apr 25 00:48:51 2020 Added colors to words in speak quiz review.
    [x] add score stars under correct/incorrect sentnce       9d49bed Fri Apr 24 22:17:07 2020 Added sentence score. Task completed.

###### Thu Apr 23 14:45:29 MSK 2020; v 20m  
rename_synthetic_viewX_to_viewB_following_mapps_code_conventions_item10_spBase_Android  
td_spBase_Android  
3b25dc9  11:29 Thu Apr 23 2020 speakingpal_apps_android_nda  Changed text alignment in dialogs quiz.  

    Quote from conventions:  
        ```
        10. [Kotlin] Use class fields to wrap synthesized class fields  
            instead of just synthesized tokens all over the class implementation  
        
        E. g. 
        private val testBindingView = lazy {
            testBindingViewB
        }
        ```

###### Wed Apr 22 19:23:55 MSK 2020; mr 1h
change_text_alignment_in_dialog_and_write_quizes_HSP_Android
HSP_Android **to_test**
3b25dc9 Thu Apr 23 11:29:36 2020 Changed text alignment in dialogs quiz.

###### Wed Apr 22 19:23:55 MSK 2020; is 20m
changes_in_dialog_and_speak_screens_id_19_29_31_HSP_iOS
HSP_iOS **to_test**
64962dd9  19:23 Wed Apr 22 2020 speakingpalapps_ios_nda  fixed RTL to dialog and speak screens

###### Tue Apr 21 17:20:50 MSK 2020; mr 40m
reading_review_screen_add_hint_to_incorrect_answer_HSP_Android
HSP_Android **in_coding**
b712997e Added hint to listen_quiz_review_item_text_layout.

    [x] UI Layer        
    [] Data Layer

###### Wed Apr 22 18:02:23 MSK 2020; is 1h, is 15m i 4h
reading_review_screen_add_hint_to_incorrect_answer_HSP_iOS
HSP_iOS **in_coding**
2db44b93  20:24 Thu Apr 30 2020 speakingpalapps_ios_nda  fixed merge issues

    [x] UI Layer
    [] Data Layer

###### Tue Apr 21 17:16:53 MSK 2020; mr 1h
changes_in_dialog_lessons_screen_id_28_HSP_Android
HSP_Android **in_coding**
1f24b87 Words button was hidden at diologs unit.

    [x] remove WORDS button
    [] pick strings for lesson based on selected gender


###### Tue Apr 21 17:16:53 MSK 2020; i 30m
changes_in_dialog_lessons_screen_id_28_HSP_iOS
HSP_iOS **to_code**
231fec40  18:56 Tue Apr 21 2020 speakingpalapps_ios_nda  HSP: set "WORDS" button hidden in UnitViewController

    [x] remove WORDS button
    [] pick strings for lesson based on selected gender


###### Tue Apr 21 12:57:33 MSK 2020; mr 2h 
add_rtl_support_to_listen_quiz_HSP_Android
HSP_Android **to_test**
4aa8a3f Tue Apr 21 16:15:25 2020 Added rtl support to listen quiz.


###### Tue Apr 21 16:59:19 MSK 2020; mr 2h
add_speech_score_to_speech_quiz_screen_HSP_Android
HSP_Android **to_test**
1be2f88f Tue Apr 21 23:04:07 2020 Added speech score to Speak Quiz.


###### Tue Apr 21 16:53:51 MSK 2020; i 1h 30m
add_speech_score_to_speech_quiz_screen_HSP_iOS
HSP_iOS **to_test**
2ebb6a1e  16:58 Tue Apr 21 2020 speakingpalapps_ios_nda  HSP: added custom SpeakQuizViewController; added speech score stars animation


###### Tue Apr 21 15:57:33 MSK 2020; i 2h 30m
fix_freez_on_writing_lesson_screen_HSP_iOS
HSP_iOS **to_test**
a2026de8  15:44 Tue Apr 21 2020 speakingpalapps_ios_nda  HSP: fixed bug with writing lesson freez

###### Tue Apr 21 15:52:55 MSK 2020; i 2h 30m
layout_fixes_after_rtl_disabling_HSP_iOS
HSP_iOS **to_test**
8909ccaa  13:48 Tue Apr 21 2020 speakingpalapps_ios_nda  HSP: fixed alignment in Quiz and QuizReview screens

###### Mon Apr 20 20:41:46 MSK 2020; i 40m
release_1.2.2.20200420_HSP_Android
HSP_Android **to_test**
1084fdb5  21:12 Mon Apr 20 2020 speakingpal_apps_android_nda  1.2.2.20200420_HSP_Android

###### Mon Apr 20 20:41:04 MSK; i 40m
release_1.1.3.20200420_HSP_iOS
HSP_iOS **to_test**
959095a7  20:56 Mon Apr 20 2020 speakingpalapps_ios_nda  1.1.3.20200420_HSP_iOS


###### Mon Apr 20 18:10:18 MSK 2020; i 1h 10m 15m
make_changes_in_splash_screen_and_app_name_HSP_iOS
HSP_iOS **to_code**
284afad9  00:33 Mon May 04 2020 speakingpalapps_ios_nda  HSP: removed alpha channel from app icons
    
    [x] App icon
    [] Background
    [] Logo
    [x] App name: עברית מדוברת לדוברי ערבית
    [x] Bottom line copyright: remove
    [x] Under the icon name: עברית מדוברת

###### Mon Apr 20 18:10:18 MSK 2020; i 1h mr 20m
make_changes_in_splash_screen_and_app_name_HSP_Android
HSP_Android **to_code**
ba7a95b7  20:15 Mon Apr 20 2020 speakingpal_apps_android_nda  HSP: executable name changed; app name on splash screen changed; copyright text on splash screen removed
    
    [x] App icon
    [] Background
    [] Logo
    [x] App name: עברית מדוברת לדוברי ערבית
    [x] Bottom line copyright: remove
    [x] Under the icon name: עברית מדוברת

###### Mon Apr 20 17:48:45 MSK 2020; i 30m
add_rtl_support_to_reading_lesson_review_HSP_iOS
HSP_iOS **to_test**
e10b535f  18:00 Mon Apr 20 2020 speakingpalapps_ios_nda  HSP: add rtl support to reading lesson review

###### Mon Apr 20 16:42:35 MSK 2020; i 1h
made_changes_in_side_menu_HSP_iOS
HSP_iOS **to_code**
9a4c3c98  17:25 Mon Apr 20 2020 speakingpalapps_ios_nda  HSP: removed facebook button from side menu
  
   Subtasks:
        [x] Facebook (Join Us) - remove the item
        [] Rate Us - update to point to the right place
        [] Send to a friend - TBD
        [] Translate the text

###### Tue Apr 21 17:17:12 MSK 2020; is 2h 15m, is 5m
add_sex_selection_to_settings_screen_HSP_iOS
HSP_iOS **to_test**
afa5d0f2  17:31 Tue Apr 21 2020 speakingpalapps_ios_nda  added HSPSettingsViewController to ipad storyboard and fixed target in iphone storyboard

###### Mon Apr 20 16:41:31 MSK 2020; mr 1h
add_sex_selection_to_settings_screen_HSP_Android
HSP_Android **to_test**
77e8a075 Mon Apr 20 21:30:17 2020 Added gender picker to setting activity.


###### Mon Apr 20 16:29:02 MSK 2020; i 4h 15m
fixed_wrong_placement_of_punctuation_symbols_HSP_iOS
HSP_iOS **to_test**
a1384c61  18:02 Mon Apr 20 2020 speakingpalapps_ios_nda  added null_resettable behaviour to swizzled_setText method


###### Mon Apr 20 13:35:06 MSK 2020; mr 40m i 5m
side_menu_HSP_Android
HSP_Android **to_code**  
34b455bd   Mon Apr 20 14:28:58 2020 Side menu: was hidden facebook button.
   
   Subtasks:
        [x] Facebook (Join Us) - remove the item
        [] Rate Us - update to point to the right place
        [] Send to a friend - TBD
        [] Translate the text
        
###### Thu Apr 16 17:20:36 MSK 2020; mr 30m
fix_crash_when_navigating_to_writing_lesson_review_screen_HSP_Android
HSP_Android **to_test**
34b455b Thu Apr 16 17:47:59 2020 bug when clicking review button fixed

###### Thu Apr 16 17:18:17 MSK 2020; i 2h mr 1h
investigate_bug_with_no_audio_in_word_flashcard_view_HSP_Android
HSP_Android

###### Thu Apr 16 11:36:00 MSK 2020; i 2h
add_web_shop_HSP_iOS
HSP_iOS **to_code**
e018508f  13:38 Thu Apr 16 2020 speakingpalapps_ios_nda  HSP: added new webshop VC (not working currently, seems need to change biller_id/vendor_id, may be changes in backend side needed)

###### Wed Apr 15 20:26:16 MSK 2020; i 30m
add_missing_height_constraint_to_scrollview_in_reading_lessons_HSP_iOS
HSP_iOS **to_test**
174e06ea  16:53 Wed Apr 15 2020 speakingpalapps_ios_nda  HSP: added rtl support to question and review in writing lesson


###### Wed Apr 15 15:13:37 MSK 2020; i 20m
fix_no_visible_content_issue_in_writing_lessons_HSP_iOS
HSP_iOS **to_test**
a6670645  15:14 Wed Apr 15 2020 speakingpalapps_ios_nda  HSP: fixed no visible content issue in writing lessons


###### Wed Apr 15 14:19:45 MSK 2020; i 1h 30m
provide_estimation_to_fix_no_visible_content_issue_in_writing_lessons_HSP_iOS
HSP_iOS **done**
    Estimation is 4-6h

###### Wed Apr 15 12:01:38 MSK 2020; i 30m
center_texts_in_category_header_horizontally_HSP_iOS
HSP_iOS **to_test**
ec53613d  12:29 Wed Apr 15 2020 speakingpalapps_ios_nda  HSP: text in category preview cell centered horizontally


###### Wed Apr 15 12:01:16 MSK 2020; i 20m
center_lesson_title_horizontally_HSP_iOS
HSP_iOS **to_test**
c92c78c2  12:43 Wed Apr 15 2020 speakingpalapps_ios_nda  HSP: lessons title centered horizontally


###### Wed Apr 15 12:00:21 MSK 2020; mr 10m
center_texts_in_category_header_horizontally_HSP_Android
HSP_Android **to_test**
b301e34 Wed Apr 15 15:08:35 2020 Text centered in catalog activity.



###### Wed Apr 15 11:48:46 MSK 2020; i 10m mr 1h
center_lesson_title_horizontally_and_vertically_HSP_Android
HSP_Android **to_test**
b301e34 Wed Apr 15 15:08:35 2020 Text centered in catalog activity.


###### Tue Apr 14 20:29:37 MSK 2020; mr 30m i 10m
refactor_code_HSP_Android
HSP_android **to_test**
d9339f7b Tue Apr 14 22:35:41 2020 Classes and resource files were refactored is hsp module.

###### Tue Apr 14 15:04:47 MSK 2020; i 10m 2h
add_config_to_set_default_language_to_arabic_HSP_iOS
HSP_iOS **to_test**
3901c654  17:57 Tue Apr 14 2020 speakingpalapps_ios_nda  set default translation language to Arabic; setup conditional translation screen presentation


###### Tue Apr 14 15:07:36 MSK 2020; i 10m 2h
add_config_to_hide_language_selection_screen_HSP_iOS
HSP_iOS **to_test**
3901c654  17:57 Tue Apr 14 2020 speakingpalapps_ios_nda  set default translation language to Arabic; setup conditional translation screen presentation


###### Tue Apr 14 15:04:47 MSK 2020; i 20m mr 30m i 10m
add_config_to_set_default_language_to_arabic_HSP_Android
HSP_Android **to_test**
55df7bb4 Tue Apr 14 19:02:45 2020 Customized gender form. In progress: code refactoring.

###### Tue Apr 14 15:04:05 MSK 2020; i 20m mr 30m
add_config_to_hide_language_selection_picker_HSP_Android
HSP_Android **to_test**
55df7bb4 Tue Apr 14 19:02:45 2020 Customized gender form. In progress: code refactoring.

###### Mon Apr 13 18:01:51 MSK 2020; mr 30m i 1h
add_config_settings_flag_to_skip_user_details_form_after_login_HSP_Android
HSP_Android **to_test**
636513d8 Mon Apr 13 20:06:54 2020 K12UserDetailsFragment now is not using in hebrewSpeakingPractice module.

###### Mon Apr 13 17:59:56 MSK 2020; i 2h
add_config_settings_flag_to_skip_user_details_form_after_login_HSP_iOS
HSP_iOS **to_test**
69837db7  17:59 Mon Apr 13 2020 speakingpalapps_ios_nda  HSP: added config settings flag to skip registration form after login


###### Mon Apr 13 14:45:21 MSK 2020; i 1h 30m
release_1.1.1.20200413_HSP_iOS
HSP_iOS
4099bc4b  14:45 Mon Apr 13 2020 speakingpalapps_ios_nda  1.1.1.20200413_HSP_iOS


###### Mon Apr 13 12:57:47 MSK 2020; i 30m
release_1.1.1.20200413_HSP_Android
HSP_Android
1f03b709  12:42 Mon Apr 13 2020 speakingpal_apps_android_nda  release_1.1.1.20200413_HSP_Android



###### Sat Apr 11 13:43:20 MSK 2020; mr 10m
quiz_result_screen_center_buttons_text_HSP_Android
HSP_Android **to_test**
c26eebed Sat Apr 11 19:31:57 2020 

    Text centered at quiz_done_layout. Task 16.



###### Sat Apr 11 13:44:38 MSK 2020; mr 30m
custimize_dialog_script_screen_HSP_Android
HSP_Android **to_test**
b74765f2   Sat Apr 11 15:52:39 2020 

    Customizing SpDialogScriptUiActivity screen. The flag icon was hidden.


###### Fri Apr 10 19:21:57 MSK 2020; i 1h
change_vocabulary_word_card_style_HSP_iOS
HSP_iOS **to_test**
87ac3d81  19:42 Fri Apr 10 2020 speakingpalapps_ios_nda  HSP: change vocabulary word card style (LESE-like)



###### Thu Apr 9 20:59:01 MSK 2020; i 30m
add_word_definition_screen_HSP_iOS
HSP_iOS **to_test**
45f8d12d  19:16 Fri Apr 10 2020 speakingpalapps_ios_nda  HSP: fixed crash when attempting to navigate to WordDefinition screen


###### Fri Apr 10 18:20:42 MSK 2020; i 20m
fix_app_crash_on_iOS_13_HSP_iOS
HSP_iOS **to_test**
38fba827  18:20 Fri Apr 10 2020 speakingpalapps_ios_nda  HSP: fixed app crash on iOS 13


###### Fri Apr 10 11:32:38 MSK 2020 mr 1h
word_screen_must_look_like_screen_from_topica_module_HSP_Android
HSP_Android **to_test**
9ec02f2 Fri Apr 10 16:07:04 2020 

    Implemented word screen in hebrewSpeakingPractice module.

    ---
    On branch:
    development




###### Thu Apr 9 20:59:01 MSK 2020; mr 4h
add_topica_like_word_definition_screen_HSP_Android
HSP_Android **to_test**
6648c44 Fri Apr 10 11:22:30 2020

    added word feature from topica module to hebrewSpeakingPractice module

    ---
    On branch:
    development


###### Thu Apr 9 20:49:09 MSK 2020; i 20m
hide_translation_button_within_dialog_script_screen_HSP_iOS
HSP_iOS **to_test**
018d3e2f  20:51 Thu Apr 09 2020 speakingpalapps_ios_nda  HSP: hide translation button within dialog script screen


###### Thu Apr 9 19:48:39 MSK 2020; i 2h
add_rtl_support_to_dialog_script_screen_HSP_iOS
HSP_iOS **to_test**
839d192c  20:24 Thu Apr 09 2020 speakingpalapps_ios_nda  HSP: added rtl support to webViews


###### Thu Apr 9 19:18:18 MSK 2020; i 10m
add_rtl_support_to_question_in_dialog_quiz_HSP_iOS
HSP_iOS **to_test**
817afce7  19:23 Thu Apr 09 2020 speakingpalapps_ios_nda  HSP: added rtl support to question in dialog quiz


###### Thu Apr 9 19:08:36 MSK 2020; i 25m
add_rtl_support_to_answers_in_dialog_quiz_HSP_iOS
HSP_iOS **to_test**
a109470c  19:17 Thu Apr 09 2020 speakingpalapps_ios_nda  HSP: added rtl support to answers in dialog quiz


###### Thu Apr 9 16:58:44 MSK 2020; i 40m
center_text_in_quiz_finish_buttons_HSP_iOS
HSP_iOS **to_test**
b88e916f  17:04 Thu Apr 09 2020 speakingpalapps_ios_nda  HSP: centered text in quiz finish buttons


###### Thu Apr 9 12:52:38 MSK 2020
web_shop_change_greeting_text_HSP_Android
HSP_Android **to_code** **est 15m**


###### Thu Apr 9 12:54:49 MSK 2020
web_shop_change_html_url_HSP_Android
HSP_Android **to_code** **est 15m**


###### Thu Apr 9 12:50:46 MSK 2020; mr 1h
replace_regular_shop_with_new_web_shop_HSP_Android
HSP_Android **to_code** **est 1h 30m**
    Shop icon appears on main screen for Guest user (or user with no license)


###### Wed Apr 8 17:15:37 MSK 2020 mr 1h
customize_main_screen_to_be_k12_like_HSP_Android
HSP_Android **to_test** 
c04f75c6 Wed Apr 8 22:18:27 2020 +0300 src files from k12 module copied to hebrewSpeakingPractice module
  

###### Tue Apr 7 18:22:44 MSK 2020 mr 3h
customize_login_screen_to_be_K12_like_HSP_Android
HSP_Android **to_test** 
1396fe80 Tue Apr 7 23:28 2020 classes and resource files from k12 module were copied to hebrewSpeakingPractice module. customize_login_screen_to_be_K12_like_HSP_Android task
   
   new logo and translations will be provided later


###### Tue Apr 7 18:18:07 MSK 2020; i 10m
change_web_shop_link_LESE_Android
LESE_Android **to_code**
    [link](https://sp-prod-lms-storage.s3-eu-west-1.amazonaws.com/content/public/lese-shop-android/shop.html)

###### Wed Apr 1 14:46:19 MSK 2020;   
add_rtl_support_for_quiz_question_HSP_iOS
HSP_iOS **to_code** **est 1h, April 14**  

###### Tue Apr 7 11:49:57 MSK 2020;
investigate_firebase_app_distribution_mngmt_SP
_mngmt_SP **to_investigate** **est cap 1h**  

###### Mon Apr 6 22:46:59 MSK 2020; i 1h
release_4.1.277.20200406_LESE_Android
LESE_Android **merged**
40ed69c0  22:46 Mon Apr 06 2020 speakingpal_apps_android_nda  4.1.277.20200406_LESE_Android


###### Mon Apr 6 21:03:39 MSK 2020; i 20m
fix_string_encoding_for_html_file_in_reading_lesson_HSP_iOS
HSP_iOS **to_test** 
9f3ece10  21:05 Mon Apr 06 2020 speakingpalapps_ios_nda  fixed string encoding for html file in reading lesson



###### Mon Apr 6 13:50:30 MSK 2020; i 10m
add_firebase_event_in_case_of_purchase_LESE_Android
LESE_Android **to_test**
a916fc9a  19:35 Mon Apr 06 2020 speakingpal_apps_android_nda  added additional analytics events


###### Mon Apr 6 13:01:53 MSK 2020; i 3h
web_shop_fix_prices_LESE_Android
LESE_Android **to_test**
0099f384  19:32 Mon Apr 06 2020 speakingpal_apps_android_nda  price info is retrieving from Google instead of SP backend


    The Shop should show the prices based on the in-app, as it did before (in local currency). The new Shop switched to show the price that is taken from LMS response.

###### Mon Apr 6 13:00:22 MSK 2020; i 2h 30m
web_shop_add_navigation_to_terms_of_use_page_LESE_Android
LESE_Android **to_test**
b913c67f  16:15 Mon Apr 06 2020 speakingpal_apps_android_nda  processed click on terms of use link, pdf file showed in separate activity


###### Mon Apr 6 12:59:43 MSK 2020; i 10m
web_shop_change_navigation_bar_color_to_black_LESE_Android
LESE_Android **to_test**
c0c0e5d6  14:28 Mon Apr 06 2020 speakingpal_apps_android_nda  LESE: change navbar's background color to black


###### Mon Apr 6 12:55:19 MSK 2020; i 20m
web_shop_should_take_entire_screen_height_LESE_Android
LESE_Android **to_test**
e1930288  14:21 Mon Apr 06 2020 speakingpal_apps_android_nda  LESE: set webView sizing to fullscreen


###### Fri Apr 3 21:17:37 MSK 2020; i 3h 1h 30m 8h 3h 10m 15m
create_new_target_HSP_iOS
HSP_iOS **to_test**
363b6930  20:13 Sat Apr 25 2020 speakingpalapps_ios_nda  HSP: added mic animation images to HSP target to prevent crash

###### Fri Apr 3 20:20:47 MSK 2020;
add_rtl_support_to_word_definition_screen_HSP_iOS
HSP_iOS **to_code** **est 1h, May 8**

    [Specification](./extras/Hebrew_Speaking_Practice_App_v2.pdf)  
    See #38 in spec file.


###### Fri Apr 3 20:18:11 MSK 2020; mr 10 m
add_rtl_support_to_word_definition_screen_HSP_Android
HSP_Android **to_test** **est 4h, May 8**
1aad95d Tue Apr 7 12:41:55 2020  added rtl support

    [Specification](./extras/Hebrew_Speaking_Practice_App_v2.pdf)  
    See #38 in spec file.


###### Fri Apr 3 20:16:22 MSK 2020; i 1h
add_rtl_support_to_answer_suggestions_in_dialog_lessons_HSP_iOS
HSP_iOS **to_test** **est 1h, May 3**
085175c7  18:28 Thu Apr 09 2020 speakingpalapps_ios_nda  HSP: added rtl support to answer suggestions in dialog and speaking lessons


    [Specification](./extras/Hebrew_Speaking_Practice_App_v2.pdf)  
    See #33 in spec file.


###### Fri Apr 3 20:15:02 MSK 2020; mr 10m
add_rtl_support_to_answer_suggestions_in_dialog_lessons_HSP_Android
HSP_Android **to_test** **est 30m, May 3**
1aad95d Tue Apr 7 12:41:55 2020  added rtl support

    [Specification](./extras/Hebrew_Speaking_Practice_App_v2.pdf)  
    See #33 in spec file.


###### Fri Apr 3 20:03:13 MSK 2020; i 50m
add_rtl_support_to_question_text_in_dialog_lessons_HSP_iOS
HSP_iOS **to_test** **est 1h, April 30**
76baeb83  19:03 Thu Apr 09 2020 speakingpalapps_ios_nda  HSP: added rtl support to question text in dialog lessons; fixed crash when navigating to DialogReviewScreen


    [Specification](./extras/Hebrew_Speaking_Practice_App_v2.pdf)  
    See #29 in spec file.


###### Fri Apr 3 19:57:51 MSK 2020; mr 10m
add_rtl_support_to_question_text_in_dialog_lessons_HSP_Android
HSP_Android **to_test** **est 30m, April 30**
1aad95d Tue Apr 7 12:41:55 2020  added rtl support

    [Specification](./extras/Hebrew_Speaking_Practice_App_v2.pdf)  
    See #29 in spec file.


###### Fri Apr 3 19:56:42 MSK 2020; 1h
add_rtl_support_to_review_text_in_writing_lessons_HSP_iOS
HSP_iOS **to_code** **est 30m, April 29**
174e06ea  16:53 Wed Apr 15 2020 speakingpalapps_ios_nda  HSP: added rtl support to question and review in writing lesson

    [Specification](./extras/Hebrew_Speaking_Practice_App_v2.pdf)  
    See #27 in spec file.


###### Fri Apr 3 19:55:48 MSK 2020; mr 10m
add_rtl_support_to_review_text_in_writing_lessons_HSP_Android
HSP_Android **to_test** **est 2h, April 29**
1aad95d Tue Apr 7 12:41:55 2020  added rtl support

    [Specification](./extras/Hebrew_Speaking_Practice_App_v2.pdf)  
    See #27 in spec file.


###### Fri Apr 3 19:54:26 MSK 2020; i 1h 30m 1h
add_rtl_support_to_question_in_writing_lessons_HSP_iOS
HSP_iOS **to_test** **est 1h, April 28**
174e06ea  16:53 Wed Apr 15 2020 speakingpalapps_ios_nda  HSP: added rtl support to question and review in writing lesson


    [Specification](./extras/Hebrew_Speaking_Practice_App_v2.pdf)  
    See #26 in spec file.


###### Fri Apr 3 19:52:34 MSK 2020; mr 10m
add_rtl_support_to_question_in_writing_lessons_HSP_Android
HSP_Android **to_test** **est 4h, April 28**
1aad95d Tue Apr 7 12:41:55 2020  added rtl support

    [Specification](./extras/Hebrew_Speaking_Practice_App_v2.pdf)  
    See #26 in spec file.


###### Fri Apr 3 19:46:30 MSK 2020; i 1h
add_rtl_support_to_quiz_answers_HSP_iOS
HSP_iOS **to_test** **est 1h, April 26**
c10f9851  21:48 Wed Apr 08 2020 speakingpalapps_ios_nda  HSP: quiz answers button switched to RTL mode

    [Specification](./extras/Hebrew_Speaking_Practice_App_v2.pdf)  
    See #23 in spec file.


###### Fri Apr 3 19:43:44 MSK 2020; mr 10m
add_rtl_support_to_quiz_answers_HSP_Android
HSP_Android **to_test** **est 1h, April 26**	
1aad95d Tue Apr 7 12:41:55 2020  added rtl support

    [Specification](./extras/Hebrew_Speaking_Practice_App_v2.pdf)  
    See #23 in spec file.


###### Fri Apr 3 19:19:00 MSK 2020; i 3h
collect_assets_HSP_iOS
HSP_iOS **to_test**
    [link](https://t.me/c/1419228052/468)


###### Fri Apr 3 19:16:17 MSK 2020; mr 3h
collect_assets_HSP_Android
HSP_Android **to_test**
    [link](https://t.me/c/1419228052/461)


###### Wed Apr 1 14:46:19 MSK 2020; i 2h
add_rtl_support_to_quiz_question_HSP_iOS
HSP_iOS **to_test** **est 1h, April 14**
20091e44  15:52 Thu Apr 09 2020 speakingpalapps_ios_nda  HSP: quiz question label switched to RTL mode

    [Specification](./extras/Hebrew_Speaking_Practice_App_v2.pdf)  
    See #15 in spec file.

###### Wed Apr 1 15:23:13 MSK 2020; mr 1h
create_module_HSP_Android  
HSP_Android **to_test**  
b7fb935 18:40 Wed Apr 1 2020  created new module hebrewSpeakingPractice  

    create new module named "HebrewSpeakinPractice"

###### Wed Apr 1 14:46:19 MSK 2020; mr 1h
add_rtl_support_for_quiz_question_HSP_Android
HSP_Android **to_test** **est 2h, April 14**
8ea86fc 00:25 Wed Apr 1 2020  Added rtl support for hebrewSpeakingPractice

    [Specification](./extras/Hebrew_Speaking_Practice_App_v2.pdf)  
    See #15 in spec file  

###### Fri Apr 3 03:48:06 MSK 2020
rtl_support_experiments_init_HSP_Android  
HSP_Android **to_test**  
8ea86fc  00:25 Thu Apr 02 2020 speakingpal_apps_android_nda  Added rtl support for hebrewSpeakingPractice module  


###### Wed Apr 1 12:27:48 MSK 2020;
web_shop_terms_of_use_navigation_not_working_LESE_Android
td_LESE_Android **to_code**  

    @IliaShved >@VladZams?: should we handle navigation to EULA page?  
        @VladZams:    


###### Tue Mar 31 14:03:00 MSK 2020
to_rebase_on_master_because_release_is_done_from_here_spBase_iOS  
td_spBase_iOS
2f1f85e  13:47 Tue Mar 31 2020 speakingpalapps_ios_nda  3.1.70.20200331_Topica_iOS


###### Mon Mar 30 22:54:28 MSK 2020; i 30m
dialog_script_video_from_top_appears_at_bottom_Topica_iOS
Topica_iOS **to_test**
92507541  22:59 Mon Mar 30 2020 speakingpalapps_ios_nda set video player frame hidden/visible when cell is about to appear/disappear


###### Sun Mar 29 12:19:39 MSK 2020; i 1h
bug_static_video_frame_stays_within_cell_after_playback_Topica_iOS
Topica_iOS **to_test**
7422fdb4  18:38 Mon Mar 30 2020 speakingpalapps_ios_nda  hide view with video/static image and update practice panel button's state when controller disappears

    Steps to reproduce:  
    [link](https://drive.google.com/file/d/18KfxKfoKWdG6XOinKPqzwmEIXLXBm-JA/view)  


###### Tue Mar 24 20:05:05 MSK 2020; i 20m, i 20m 10m 8h, mr 2h, i 20m 1h 30m
web_shop_LESE_Android  
LESE_Android **to_test**  
d517e730  12:32 Fri Apr 03 2020 speakingpal_apps_android_nda  LESE: added navigation to WebShop from units list screen

    Dev notes: [Archive](./extras/archive_new_shop_screen_LESE_iOS.md)

    Subtasks:
        [x] Create activity with webView and render html
        
            URL to load:  
            https://cdn.speakingpal.com/content/public/lese-shop/shop.html
        
        [x] inject JavaScript code that will replace hardcoded prices and currenceis with ones we recieved from Google Play
            
            subscription ids: 
                com.speakingpal.ettr.annual - id of element with price in html code is "price-1y"
                com.speakingpal.ettr.6monthly - id of element with price in html code is "price-6m"
                com.speakingpal.ettr.monthly - id of element with price in html code is "price-1m"
            
            class of element with currency symbol in html code is "currency"

        [x] inject JavaScript code to be able to handle taps on elements to start native android purchase flow



###### Tue Mar 17 20:32:03 MSK 2020;
dialog_script_video_pause_doesnt_work_ECTV_iOS
ECTV_iOS **to_wait_for_approve_by_customer**  
bc89fd15  18:42 Sun Mar 15 2020 speakingpalapps_ios_nda  1.1.21.20200315_ECTV_iOS

    @IlyaSys: Play dialog video at review screen. Press pause button. Nothing happened.

###### Tue Mar 17 20:17:49 MSK 2020; v 20m  
dialog_script_video_from_top_appears_at_bottom_ECTV_iOS
ECTV_iOS **to_wait_for_approve_by_customer**  
bc89fd15  18:42 Sun Mar 15 2020 speakingpalapps_ios_nda  1.1.21.20200315_ECTV_iOS

     **Steps to reproduce**:  
    
        1. login as guest, enter the dialog (dialog_business_coference)  
        2. finish the dialog OR press skip in top-right corner
        --> app navigated to DialogReview screen with dialog bubble cells  
        3. Expand the 1st user cell (should be expanded by default)
        4. Within the cell, in the bottom_practice_panel press the most left blue button, wait for the dialog_replica playback finishes  
        5. Scroll to the last cell
        
        **Actual result**  
        You will see part of video frame at bottom cell

        **Expected**:  
        Video frame stays with the associated cell  

###### Wed Mar 25 00:50:17 MSK 2020
crash_log_file_from_previous_version_shared_within_new_version_user_email_report_Topica_iOS  
td_Topica_iOS  
30ac8b2  17:32 Tue Mar 24 2020 speakingpalapps_ios_nda  3.1.69.20200324_Topica_iOS

    @ArielV_customer: This is the email with the first log I've sent. How's that possible?  

        Maybe some previous crash info left by the previous version was there?

        So it's clear to me that (1) the logs I forwarded to you were sent by the new version and (2) probably they contained the previous version crashes.  

        Ok, let's put that on hold then  

    These 2 files were included into user_email_report sent from within 3.1.68.20200312_Topica_iOS:  
    * [log28](./extras/log_28.crash)  
    * [log29](./extras/log_29.crash)  

    Related: estimate_crash_fixes_20200324_Topica_iOS  

###### Sun Mar 1 19:01:58 MSK 2020; v 20m  
edit_build_readme_documentation_LESE_iOS  
td_LESE_iOS  

    * `brew install carthage`  
    * `carthage build --platform iOS`  
    * install zsh:  
        If you already have system-wise zsh instance, run:  
        `ln -s "/bin/zsh" "/usr/local/bin/zsh"`

        Otherwise run  
        `brew install zsh`  

###### Mon Feb 24 23:40:06 MSK 2020; v 20m  
report_hours_per_project_for_latest_30_days_mngmt_SP  
_mngmt_SP  **to_code**  

    Feb 23 - Feb 25 – the timeframe @ArielV_customer asked the report for.  
    Output format example:  
        ```
        LESE_iOS: 35h 20m
        Topica_iOS: 20h 10m
        Topica_Android: 3h
        ```

    Existing script that calculated the total time for **single time_records_string** is available in [zTasksReport](../common_tools_and_conventions/zTasks/zTasksReport.py)  
    There are also two zsh helper-scripts for calculating the total time 
    of ALL DONE tasks on ALL of the projects (i. e. without differentiation between the project):  
        ``` zsh
        
        allTimeRecordsStrings_ofDoneTasks() {
            local file="$1"
            cat $file | grep "^\[x\]######"
        }

        tasksTimeReport() {
            local minutesToSum=0
            local file="$1"
            allTimeRecordsStrings_ofDoneTasks "$file" | while read line ; do
                local minutes_per_task=$(py "<PYTHON_SCRIPT_DIR>/zTasksReport.py" "$line")
                ((minutesToSum=minutesToSum + minutes_per_task))
            done
            local hours=$((minutesToSum / 60))
            local min=$((minutesToSum % 60))
            print "${hours}h ${min}m"
        }
        ```  

###### Thu Mar 12 10:39:42 MSK 2020; v 1h
bug_old_shop_opened_when_notFree_unit_selected_Topica_iOS  
Topica_iOS **to_test** 
555a0d4  10:40 Thu Mar 12 2020 speakingpalapps_ios_nda  Topica: fixed bug_old_shop_opened_when_notFree_unit_selected_Topica_iOS  

###### Thu Feb 20 22:27:50 MSK 2020; i 1h
bug_license_expired_not_work_LESE_iOS  
LESE_iOS **to_test**  
49566e2f  22:03 Sun Feb 23 2020 speakingpalapps_ios_nda  LESE: disabled "License expired" popup at login

    Account to use for tests (already added to `StubUsernameAndPasswordForLoginTest.swift`):  
        arielvsky@example.com
        12345678

    [x] @VladZams: Confirmed the issue. Can't pass login screen  
        **Expected**: after login attempt the app should navigate to MainMenu as if the license was up-to-date  
        
        **Actual**: "License expired" popup appears and app doesn't proceed to MainMenu, it stays on the login screen.  
    
    [x] BUG: License_Expiration_Status_view is not shown in the dashboard for the account with expired license  

    [x] BUG: "License_expires_in_x_days" and "License_expired" strings not localized if device is not in English locale.


###### Thu Mar 5 21:49:45 MSK 2020; v 20, i 20m, i 20m, v 30m, i 20m, is 45m
issues_during_purchase_LESE_iOS  
LESE_iOS  **in_coding**
6e99254f  21:46 Thu Mar 05 2020 speakingpalapps_ios_nda  added support button with email action

    [x] If not too complicated, we'd like to show two buttons: 
        Ok | Support
        where Support opens an email to support  

        Code point:  
            ```
            // EnglishTutor3/CustomLoginV4ViewController.m:321
            [AlertFactory showModalAlert:[Resources localizedStringForKey:@"sign_up_failed"]
                                                message:msg
                                            buttonTitle:[Resources localizedStringForKey:@"ok"]];
            ```  

        Support email sender:  
        SpeakingPal-Base/Classes/UI/Helpers/SupportAndFeedbackMailSender.h:12  

    [x] Fix the keyboard that's overlapping error_message popup  
        [screenshot](./extras/error_popup_1_issues_during_purchase_LESE_iOS.jpg)
    
    @ArielV_customer: 
        Original description: The problematic prompt is shown in the case the user is trying to register with an existing account. The keyboard covers the button and the text is not accurate. It IS accurate in the regular registration scenario, but not on the same error after purchase.

        This is what should be shown in this case: [screenshot](./extras/error_popup_1_issues_during_purchase_LESE_iOS.jpg). The blue marker shows the keyboard that hides the Ok button.
        
        The correct sentence id is "user_already_exists" - you should have this string in all the translations.  

            
            @IliaShved: i need more details for this task. maybe it would be easier to understand when we'll have Sandbox Account credentials.  
            
            @IliaShved >@VladZams: I can't understand which screen Ariel wrote about.

                @VladZams: the screen that we see on the [screenshot](./extras/error_popup_1_issues_during_purchase_LESE_iOS.jpg)
                "Create New Account in the top"  

    [] Change text & buttons in Sign In failed notification for the "user email already exists" error  

        @VladZams: which is (current) wrong text used?  
        @ArielV_customer: I believe it's this: "Sign up failed. Please contact support."  
        @vladZams >ArielV_customer: We rechecked few times and still are not able to reproduce the bug that some other text is shown. So, the only text we've seen is the one on the screenshot and as far as I got it, this text is the right one.  

    [x] Outdated:  
        Please make sure to check the entire payment process for a guest including mandatory registration. For me the last part did not work well:
        first time (email entered) I got to the registration screen again. Tried with Facebook, the app crashed on the way back from Facebook (report sent).  

            @ArielV_customer:  We have retested this scenario extensively. It looks like mostly it works as expected. We only want to fix one error prompt there - will provide the details below. So other than this change, nothing to do. The Facebook issue most probably happened as I tried to register with  an already existing account or because the app was in a wrong state before.  

###### Thu Mar 19 20:45:32 MSK 2020; is 40m i 10m
shop_js_injection_upgrade_to_support_more_than_three_label_ids
td_spBase_iOS **merged**
e0767e1f 20:44 Thu Mar 19 2020 speakingpalapps_ios_nda  updated script to iterate through array of searching items

###### Sun Mar 8 16:59:42 MSK 2020; i 20m, is 1h 40m i 10m
shop_find_cause_of_clickListener_postMessage_not_called_if_clickableAreas_number_less_than_expected_in_js_ingected_to_webview_spBase_iOS  
td_spBase_iOS **merged**
0d1830c 16:52 Sun Mar 08 2020 speakingpalapps_ios_nda  updated script to iterate through clickable areas and manipulate with its child elements


    Related commit:  
        ```
        commit 4b4337ab844c9c17d2eae2c4ee02f72e69fa9e27
        Author:     Vlad Zamskoi <v.mobileAppSoft@gmail.com>
        AuthorDate: Sun Feb 23 17:16:44 2020 +0300
        Commit:     Vlad Zamskoi <v.mobileAppSoft@gmail.com>
        CommitDate: Sun Feb 23 17:16:44 2020 +0300

            Topica: temporary demo of Topica_shop_html_page where message_passing from WebView to native code works OK

            The problem is that as soon as the code currently commented out below
            `PurchaseSubscriptionVC.swift:89` is brought back to javascript area, the messages_passing
            stops working, so clicks on the WebView can't be handled by the app. Don't know what line of
            JS code causes this issue.

            ---
            On branch:
            add_new_shop_accessible_from_side_menu_Topica_iOS
        ```

###### Sun Mar 8 14:30:34 MSK 2020; is 15m
move_shopVC_out_from_manualTests_dir_LESE_iOS  
td_LESE_iOS  **to_test**  
9af52ad5  14:30 Sun Mar 08 2020 speakingpalapps_ios_nda  renamed PurchaseSubscriptionVC to WebShopVC and moved from manual test dir, removed test resources

###### Thu Feb 20 22:46:44 MSK 2020
rename_newShopVC_LESE_iOS  
td_LESE_iOS  **to_test**  
06ef825  21:45 Thu Feb 20 2020 speakingpalapps_ios_nda  Added test user credentials to check license_Expired_Status_View

    @VladZams > @IliaShved?: Can we please rename `PurchaseSubscriptionVC` to `NewShopVC` or any other name with `NewShop` in it?  
        
        @IliaShved:  I don't really like 'New' prefix. What about WebShopViewController?


###### Wed Feb 5 21:33:44 MSK 2020; i 30m
bug_selected_list_item_decoration_should_be_of_full_height_LESE_iOS
LESE_iOS **to_test**  
fa83249b  00:32 Tue Feb 25 2020 speakingpalapps_ios_nda  LESE: fixed language selection color for iPads

    Language selection page (I think, it's in `LanguageSelectionViewController`). When selecting a language - the area that is colored during pressing is inky under the flag level and not the entire flag height  

    [x] Tested on Dark system theme as well by @IliaShved


###### Thu Jan 30 10:34:51 MSK 2020; v 20m, 1h  
conditions_to_start_paying_tech_debt_mngmt_sp
mngmt_sp  

    [] @ArielV_customer >@VladZams: 
    Give a rough estimation on what it means - min and ideal path, will give it some thought

    Asked >@ArielV_customer:  
    > Do SpeakingPal management imagine more or less precisely what conditions should be met for starting to rewrite certain parts of iOS apps addressing rather big tech. debt?  

    > Android has problems as well but iOS seems to be in worse state just because of unmaintainable UI mess.  

###### Sun Feb 9 11:44:44 MSK 2020
inherit_test_purchase_subscription_vc_from_base_vc_LESE_iOS
td_LESE_iOS  
30ac8b2  17:32 Tue Mar 24 2020 speakingpalapps_ios_nda  3.1.69.20200324_Topica_iOS

    [] Inherit `TestPurchaseSubscriptionVC.swift` from `SpeakingPalViewController` – Base ViewController  

        @IliaShved >@VladZams:
        I need your help with `Inherit `TestPurchaseSubscriptionVC.swift` from SP BaseVC`
        When i am trying to subclass, app crashes with folowing error

            `Terminating app due to uncaught exception 'NSInternalInconsistencyException', reason: 'Could not load NIB in bundle: 'NSBundle </private/var/containers/Bundle/Application/FB7288B1-CFF8-4DA2-A3CB-9C93934745E7/EnglishTutor3.app> (loaded)' with name 'EnglishTutor3.PurchaseSubscriptionVC''`  

            ###### Sun Feb 9 11:46:30 MSK 2020
            @VladZams: will take a look at it.  

    Related: 
        shop_ui_make_whole_purchase_item_clickable_LESE_iOS
        2nd_iter_new_shop_screen_LESE_iOS,  


###### Thu Mar 12 20:26:44 MSK 2020; v 40m, is 1h 10m
restore_import_of_speakingpal_base_in_swift_files_LESE_iOS  
td_LESE_iOS  **to_test**
ae74bf4b  21:44 Thu Mar 12 2020 speakingpalapps_ios_nda  fixed problem for Topica and Native Talk of importing speakingpal-base

    Short story:  
        * some time ago there were LESE compilation errors caused by `import speakingpal_base`. 
            Presumably caused by some swift+obj interoperability issues: module not found error presumably caused by duplication of imports of some modules  
        * a workaround was found and successfully applied to fix the compilation errors  
        * some of workaround_changes were not necessary but it's unknown which exactly. I. e. some of them didn't cause the compilation errors.  

    The task:  
        Find in what file exactly `import speakingpal_base` causes LESE compilation errors by 
            * reverting workaround_changes in all the affected files one by one  
            * check if LESE compiles OK after reverting each file  

        The task should be done in two potentially unrelated stages:  
            1. restoring `import speakingpal_base` (currently they are commented out) in some swift files included into LESE target.  
            2. change target_ownership of some swift files from `EnglishTutor3` back to `speakingPal-base` as it was originally

        Stage 1 How to:  
            * Look for `// TODO IMPORT_BUG` comment in all swift files    
            * for each file:  
                1. Try to uncomment 2 things  
                    * what's under `// TODO IMPORT_BUG`  
                    * AND `import speakingpal_base` statements in the beginning of those swift files where you found any of `// TODO IMPORT_BUG` marks  
                2. each time you uncomment `import speakingpal_base` in any swift file  
                    try to build and run LESE app on the device to check there is no compilation error  
                3. If build is still works, then remove `// TODO IMPORT_BUG` comment itself  

        Stage 2 How To:  
            * go to EnglishTutor3 target --> Build phases to see the list of files source files included into the build  
            * Filter ".swift" files to see all swift files included to LESE but resided not in "SpeakingPal/EnglishTutor3" dir in the project_file_system_tree.  
                It's expected that currently all such files are resided in "SpeakingPal/SpeakingPal-Base". And this means that they originally should belong to `speakingpal-base` target, and not included directly into `EnglishTutor3` target. 
            * foreach file in the list:  
                * exclude it from EnglishTutor3 target
                * include it into speakingpal-base target  
                * try to build and run LESE app on the device to check there is no compilation error  

    NOTE: original workaround in general was done the following way:  
        * exclude swift files from `speakingpal-base` target and instead include them into `EnglishTutor3` target directly  
        * comment all `import speakingpal_base` statements in those swift files which are included into `EnglishTutor3` target directly  
        * in swift files included into `EnglishTutor3` target directly:  
            comment all the business-insignificant-code that depends on speakingpal_base module
            Like e. g. logging code:  
            ```
            SPLog.error
            ```  

###### Thu Jan 30 09:25:23 MSK 2020
mngmt_sp
archive_jan_2020_work  
    move all from tasks feed to separate file  
    Consider how to deal with tasks like `new_shop_screen_LESE_iOS` work on which continues from one month to another  

###### Thu Jan 30 07:26:53 MSK 2020
bug_profileScreen_username_is_not_centered_horizontally_LESE_iOS  
LESE_iOS  **to_ask_customer_for_approve**  
    ```
    2ccc85b  00:16 Thu Jan 23 2020 speakingpalapps_ios_nda  1.1.76.20200122_k12_iOS
    ```

###### Tue Mar 3 22:05:35 MSK 2020; is 1h
add_bottom_ad_banner_to_UnitMenu_LESE_iOS
LESE_iOS **to_test**: 
c887550d  22:06 Tue Mar 03 2020 speakingpalapps_ios_nda  added ads banner to bottom of UnitMenu
    The banner should be the same as on UnitDownloadScreen. And it should be shown only to certain users (just like with existing logic on UnitDownloadScreen): those who doesn't have any purchases (or license, don't remember for sure)  

###### Thu Jan 30 09:18:22 MSK 2020
bug_iPad_userProfile_finger_pointer_not_hidden_LESE_iOS  
LESE_iOS  **to_ask_customer_for_approve**  
    ``` 133de19  09:02 Thu Jan 30 2020 speakingpalapps_ios_nda  LESE: Implemented for iPhone: goToUserProfile from mainMenu by clicking on numberOfSpokenSentencesView ```

    [Blue finger pointer to the left from silhouette](./extras/1bug_iPad_userProfile_finger_pointer_not_hidden_LESE_iOS.png)

    iPhone doesn't have it.
    Todo: remove from iPad.

###### Wed Jan 22 19:38:59 MSK 2020; i 20m
extension_used_to_override_method_td_k12_iOS  
td_k12_iOS 
?: VietnamK12/CustomCategoryCatalogViewController.swift:11: 
    why is extension used to override a method and not class inheritance?
    
    @VladZams >@IliaShved 
    
    @IliaShved >@VladZams
    all segues expects CustomCategoryCatalogViewController class.
    But we already have CustomCategoryCatalogViewController in speakingpal-base
    and we can't do something like 
    CustomCategoryCatalogViewController: speakingpal-base.CustomCategoryCatalogViewController
    So, extension is the only workaround i found.

    ```
    fbd25b4  01:23 Wed Jan 22 2020  K12: added CustomShopViewController that inherits from ShopViewController instead of use one from ET3
    ```

###### Wed Jan 22 19:36:48 MSK 2020; i 10m
customShopViewController_empty_implementation_td_k12_iOS  
td_k12_iOS
    ```
    fbd25b4  01:23 Wed Jan 22 2020  K12: added CustomShopViewController that inherits from ShopViewController instead of use one from ET3
    ```
    Do we need empty `CustomShopViewController.m`?
    @VladZams >@IliaShved 

    @IliaShved >@VladZams
    Yes. We need it, because segues expects CustomShopViewController class.

    ./SpeakingPal/VietnamK12/CustomShopViewController.m  

###### Sun Jan 19 19:19:49 MSK 2020
handle_null_in_localizedWithFallbackValue_td_spBase_iOS  
td_spBase_iOS
    Alter the implementation of localizedWithFallbackValue to handle `null` and support `nullable`  

    @IliaShved:  
    We just need to add NS_ASSUME_NONNULL_BEGIN / NS_ASSUME_NONNULL_END macro to the source file, but it seems it would be some compilation errors, because in some places result of localized() function is guard-ed.  

        So the final result will look like 
        ```
        NS_ASSUME_NONNULL_BEGIN

        @interface NSString (LocalizedResources)

        - (NSString *)localized;

        - (NSString *)localizedWithFallbackValue:(nullable NSString *)fallbackValue;

        @end

        NS_ASSUME_NONNULL_END
        ```  

    @VladZams:  
    Semantically there should not be null provided as fallbackValue. It makes no sense to supply null.

###### Thu Jan 23 01:30:53 MSK 2020
prevent_db_from_being_closed_while_app_is_running_spBase_Android  
td_spBase_Android  

###### Sun Jan 19 15:39:16 MSK 2020; v 20m 1h
setup_workspace_for_Ilya_mngmt_sp
mngmt_sp
    ilyashvedikov@gmail.com

    https://bitbucket.org/zvlad/speakingpal_apps_android_nda/admin/access
    https://bitbucket.org/zvlad/bigdealrepo/admin/access

    [x] Create tasks progress repository  
    [x] add zZshFramework  
    [x] add to SP team in XCode ilyashvedikov@gmail.com
    [] add VSCode snippets  

###### Sun Jan 12 01:52:18 MSK 2020; 1h, 1.5h 
override_vendorID_by_one_got_from_server_LESE_Android  
LESE_Android

    ###### Sun Jan 12 01:53:05 MSK 2020
    start

    User account to check with:
    sp929@s.pal 97199294  

    ###### Sun Jan 12 04:01:53 MSK 2020
    start  

    https://lms.speakingpal.com/services/speakingpal_rest/Authenticate?
    password=97199294
    catalog_v3=true
    user_name=sp929%40s.pal
    vendor_id=239
    imei=fbf079f3e7ea7bed1f22ed8f52c1004d
    app_id=SpeakingPal
    platform=1  

    ```
    15134e8  07:57 Sun Jan 12 2020  Implemented: override_vendorID_by_one_got_from_server
    ```

    Not Tested yet:  
    facing MaxNumberOfDevicesReached error during login. Asked @ArielV to reset counter.  


###### Wed Dec 18 13:41:41 MSK 2019
_Topica_Android
we have found one major issue - the speech recognition in Words activity often does not work well. Returns immediately with "no recognition" hald of times. Might be timing related. We're not going to fix that for now, we had to release this app 2 weeks ago already. Will have this in the list  for the next version.


###### Wed Dec 11 03:13:44 MSK 2019
_LESE_iOS  
    LESE: add licenseExpirationStatusUI to UserProfile screen  
    Related: f2e37d9b Vlad Zamskoi <v.mobileappsoft@gmail.com> on 2019-11-22 at 19:45  

###### Mon Dec 9 19:30:11 MSK 2019
_Topica_Android
Exception on entering DialogReview screen (after interactive dialog)  

2019-12-09 19:29:06.254 3257-3257/com.speakingpal.speechtrainer.topica D/OriginOfLifeService: noNeedToKeepMeAlive called.
2019-12-09 19:29:06.257 3257-3919/com.speakingpal.speechtrainer.topica D/OriginOfLifeService (OriginOfLifeService.java:83) keepMeAlive(): keepMeAlive called
2019-12-09 19:29:06.260 3257-3919/com.speakingpal.speechtrainer.topica D/OriginOfLifeService (OriginOfLifeService.java:89) keepMeAlive(): ?: Did `bindService` call return success: false
2019-12-09 19:29:06.275 3257-3919/com.speakingpal.speechtrainer.topica D/SP_ScoresRepository: found 0 app start/end events to report
2019-12-09 19:29:06.281 3257-3919/com.speakingpal.speechtrainer.topica E/CursorWindow: Failed to read row 0, column 3 from a CursorWindow which has 2 rows, 3 columns.
2019-12-09 19:29:06.283 3257-3919/com.speakingpal.speechtrainer.topica E/com.speakingpal.speechtrainer.lms.ReportClientProgressTask: HANDLED exception 'java.lang.IllegalStateException' with message 'Couldn't read row 0, col 3 from CursorWindow.  Make sure the Cursor is initialized correctly before accessing data from it.'.
    Stack trace:
        	android.database.CursorWindow.nativeGetLong(Native Method)
    	android.database.CursorWindow.getLong(CursorWindow.java:538)
    	android.database.AbstractWindowedCursor.getLong(AbstractWindowedCursor.java:75)
    	com.speakingpal.speechtrainer.sp_new_client.sqlite.repositories.ScoresRepository.getUnreportedUnitStartEnd(ScoresRepository.java:800)
    	com.speakingpal.speechtrainer.sp_new_client.sqlite.repositories.ScoresRepository.getJsonReports(ScoresRepository.java:736)
    	com.speakingpal.speechtrainer.lms.ReportClientProgressTask.reportSessions(ReportClientProgressTask.java:96)
    	com.speakingpal.speechtrainer.lms.ReportClientProgressTask.doInBackground(ReportClientProgressTask.java:54)
    	com.speakingpal.speechtrainer.lms.ReportClientProgressTask.doInBackground(ReportClientProgressTask.java:21)
    	android.os.AsyncTask$2.call(AsyncTask.java:333)
    	java.util.concurrent.FutureTask.run(FutureTask.java:266)
    	android.os.AsyncTask$SerialExecutor$1.run(AsyncTask.java:245)
    	java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1167)
    	java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:641)
    	java.lang.Thread.run(Thread.java:764)
    
    *****************
2019-12-09 19:29:06.283 3257-3919/com.speakingpal.speechtrainer.topica D/OriginOfLifeService: noNeedToKeepMeAlive called.

###### Wed Nov 27 17:41:58 MSK 2019
_LESE_Android  
    There is a problem with Firebase reporting of 
    Nov 13th:  
    (a) admob ads - was reported before
    (b) in-app purchases  
    Could you please have a look as well (LESE Android ONLY, iOS seems to work well)

###### Sun Oct 6 22:36:31 MSK 2019
_LESE_Android  
    If time allows:

    5. Change MY PROFILE page to be like in TOPICA Android

    6. Register page - text at the bottom (for login) and Login page - - text at the bottom (for register) - Increase font x2. 

    7. When pressed CONTACT US at the license expired prompt, make the generated email title "License expired in SpeakingPal..." Instead of "Problem with SpeakingPal ..."
    Let me know if any of the above is difficult to fix. Let's spend a day max to fix and release an update, then we have to switch to Firebase for iOS. As discussed before, we have to release 4 iOS apps with Firebase support before the end of the month.  


###### Tue Nov 26 21:32:13 MSK 2019  
_LESE_Android  
    Cache stores this "error" even after the network is fully available  

    I'm still not getting response from:  
    https://lms.speakingpal.com/services/speakingpal_rest/Register?password=43a7d1a8ac535b5c3810c3ef5266fef1&user_name=43a7d1a8ac535b5c3810c3ef5266fef1

    [5:50:44 PM] Ariel:
    Will check

    [5:49:28 PM] Vlad Zamskoi. iOS & Android. Minsk & Tel-Aviv.:
    Thanks.

    [7:19:09 PM] Vlad Zamskoi. iOS & Android. Minsk & Tel-Aviv.:
    It's working now. It was a problem with the simulator.

    [7:20:55 PM] Ariel:
    Just was about to tell you I can see no such request in the logs
    :+1:

    [7:22:01 PM] Vlad Zamskoi. iOS & Android. Minsk & Tel-Aviv.:
    Was getting Unable to resolve host “lms.speakingpal.com”; No address associated with hostname

    [7:24:21 PM] Ariel:
    iOS?
    Obvoisly, Android
    Not sure if you can see the problem and how it was resolved, but I think occasionally we have this happening on real devices as well
    Like some local cache that stores this "error" even after the network is fully available

    [7:25:12 PM] Vlad Zamskoi. iOS & Android. Minsk & Tel-Aviv.:
    > Ariel LTD
    > Obvoisly, Android
    Yes) I resolved it by resetting the simulator.
    edited 
    [7:27:53 PM] Ariel:
    I can see this error in "Sign In Failed" reports we are getting from users. Obviously, they had the network even to sent these messages
    Not a major issue, probably happens when roaming between networks, but still would be nice to fix one day. Not today :blush:

    [7:28:37 PM] Vlad Zamskoi. iOS & Android. Minsk & Tel-Aviv.:
    I indeed had no internet connection for some time, but it was the case with my physical device and it worked fine. Ok, will put it in the backlog.

    [7:30:18 PM] Ariel:
    Please do, thanks.


###### Sun Nov 24 13:30:01 MSK 2019
apply_weaker_access_specifiers_to_class_fields_spBase_Android  
td_spBase_Android
    Android: 'Declaration access can be weaker' didn't work in 

    BUT this works:  
    Rightclick on the class or package → Analyze → Run Inspection by Name → Declaration access can be weaker  

    // com/speakingpal/speechtrainer/testprep/ui/K12UserProfileUiActivity.java:30
    `private Fragment getFragment() {`
        Sun Nov 24 13:29:53 MSK 2019  
        https://stackoverflow.com/questions/41716196/how-to-disable-access-can-be-package-private-message-in-intellij/41716317#41716317


###### Wed Nov 27 17:13:54 MSK 2019  
request_puchase_plans_based_on_location_spBase_Android  
td_spBase_Android
    Nov 25th:  
    Another thing that took my attention since few days ago and now it became more clear. There is a logic in the app that tries to compose country-dependent billerID and then request purchases plans based on user last_known_location. 

    Newer versions of OS don't provide access to location right away, it needs be be requested explicitly (currently we don't ask for it). So the not-country-specific billerID is used instead and the following error is reported:  
    Cannot find location - requesting generic purchase plans

    Please, let me know if it needs to be addressed anyhow.  


###### Thu Mar 12 21:41:09 MSK 2020;
update_glscp_script_to_support_long_playing_branches_zZsh_macos  
td_zZsh_macos **to_code**  

    @IlyaSys: Update glscp script to check the most recent branch from current, master or development. And copy commit descriptor  

------------------------------------------------------------------------------
------------------------------------------------------------------------------
------------------------------------------------------------------------------

# Done Tasks

[x]###### Tue Nov 5 14:09:45 MSK 2019

    - submit Topica Android update (merge Firebase changes and stall splash screen fix)  
        ###### Wed Nov 27 17:01:30 MSK 2019 done


[x]###### Fri Nov 22 20:00:38 MSK 2019
    [x] Make app run
    [x] UserProfile: make LicenseExpirationStatusUI to be specific for LESE  
        done in f2e37d9b26b95a49f8936d01018d77848276051c


[x]###### Sat Nov 23 02:45:29 MSK 2019
Cause: com.facebook.FacebookSdkNotInitializedException
    ** Message: The SDK has not been initialized, make sure to call FacebookSdk.sdkInitialize() first.
    ** Stack track: 	com.facebook.internal.Validate.sdkInitialized(Validate.java:143)
    	com.facebook.FacebookSdk.getApplicationContext(FacebookSdk.java:518)
    	com.facebook.ProfileManager.getInstance(ProfileManager.java:59)
    	com.facebook.Profile.getCurrentProfile(Profile.java:63)
    	com.speakingpal.speechtrainer.sp_new_client.facebook.FacebookLoginManager.getFbUser(FacebookLoginManager.java:66)
    	com.speakingpal.speechtrainer.sp_new_client.ui.SpDashboardFlatUiActivity.updateViewsState(SpDashboardFlatUiActivity.java:285)
    	com.speakingpal.speechtrainer.sp_new_client.ui.SpDashboardFlatUiActivity.onResume(SpDashboardFlatUiActivity.java:129)
    	com.speakingpal.speechtrainer.topica.features.main_menu.TopicaMainMenuActivity.onResume(TopicaMainMenuActivity.kt:28)
    	android.app.Instrumentation.callActivityOnResume(Instrumentation.java:1446)  

        Fixed in:  
        4e3ebf46a70b7e738e0f3145da84215516d92f7f


[x]###### Sun Nov 24 12:10:23 MSK 2019  
K12_Android: Cleartext HTTP traffic to host not permitted  

Vlad, we have an issue in Test Prep on Android. Looks related to some new (9, maybe 8) network permissions. Symptom:
K12CategoryCatalogUiActivity#Unit download has failed!!! Error:java.io.IOException: Cleartext HTTP traffic to vn.speakingpal.com not permitted
 Possible solution:
<?xml version="1.0" encoding="utf-8"?>
<manifest ...>
    <uses-permission android:name="android.permission.INTERNET" />
    <application
        ...
        android:usesCleartextTraffic="true"
        ...>
        ...
    </application>
</manifest>
 Please try to rebuild and send the updated APK so that we can test.
 Look here for more details or if anything is not clear:
https://stackoverflow.com/questions/45940861/android-8-cleartext-http-traffic-not-permitted


[x]###### Wed Nov 27 22:05:57 MSK 2019
g rebase master 
// Rebasing `integrating_firebase_analytics_topica` on top of master
First, rewinding head to replay your work on top of it...
Applying: Topica: experimenting with styles to make custom text to be white during the input
Applying: Changed input text color to white
Applying: Adjusted size for smaller screen
Applying: Topica: experimenting with styles to make custom text to be white during the input
Using index info to reconstruct a base tree...
M	speakingPalBase/src/main/res/drawable/edit_button.xml
M	speakingPalBase/src/main/res/drawable/edit_text_style.xml
M	topica/src/main/AndroidManifest.xml
M	topica/src/main/java/com/speakingpal/speechtrainer/topica/features/custom_text_recognition/CustomTextRecognitionActivity.kt
M	topica/src/main/res/layout/custom_text_recognition_activity.xml
M	topica/src/main/res/values/styles.xml
Falling back to patching base and 3-way merge...
Auto-merging topica/src/main/res/values/styles.xml
CONFLICT (content): Merge conflict in topica/src/main/res/values/styles.xml
Auto-merging topica/src/main/res/layout/custom_text_recognition_activity.xml
CONFLICT (content): Merge conflict in topica/src/main/res/layout/custom_text_recognition_activity.xml
Auto-merging topica/src/main/java/com/speakingpal/speechtrainer/topica/features/custom_text_recognition/CustomTextRecognitionActivity.kt
CONFLICT (content): Merge conflict in topica/src/main/java/com/speakingpal/speechtrainer/topica/features/custom_text_recognition/CustomTextRecognitionActivity.kt
error: Failed to merge in the changes.
Patch failed at 0004 Topica: experimenting with styles to make custom text to be white during the input
hint: Use 'git am --show-current-patch' to see the failed patch
Resolve all conflicts manually, mark them as resolved with
"git add/rm <conflicted_files>", then run "git rebase --continue".
You can instead skip this commit: run "git rebase --skip".
To abort and get back to the state before "git rebase", run "git rebase --abort".


[x]###### Wed Nov 27 17:03:58 MSK 2019
Topica Android: 
[x] one crash to fix in Topica Android for now:
    enter a unit, press W for the words activity -> crashes

[x] [9:21:38 AM] Ariel: Another one - in the write & speak screen: write & say something, change the sentence, try speaking again -> crashes


[x]###### Wed Nov 27 00:16:13 MSK 2019
    Topica_Android: Write&Speak changing to dark theme   
    <HTML><HEAD><LINK href="file:///android_asset/customtextrecognitionresultstyles.css" type="text/css" rel="stylesheet"/></HEAD><body><span class='good'>hello</span> <span class='bad'>dear</span> <span class='good'>managers

    </span> </body></HTML>


[x]###### Wed Dec 11 02:55:19 MSK 2019
Am I right that TopicaMainMenu shouldn't have LicenseExpiration messages under any circumstances?
    
    ###### Sun Dec 15 15:13:58 MSK 2019
    As of week ago, there is a need to add LicenseExpiration messages to Topica, it's still in progress now      

[x]###### Fri Dec 13 16:05:48 MSK 2019
Error @ 2019/12/13 16:21:46.9#SP_ST LmsCnct#IOException while trying to login user
Debug @ 2019/12/13 16:21:46.9#.sp_feature.Login (:-1) a()#getConnectionResultFromCode: -3

Do you know what is the problem? LMS err code or Android or app?
 I've checked that no such request appears to be in LMS logs...
Please have a look and let me know  

Exception comes from `com/speakingpal/speechtrainer/lms/LmsConnectorImpl.java`:  
Either from:  
    * `public LoginResponse authenticateUser(String email, String password, String gcmRegId) {`
    * or `public LoginResponse loginUser(String email, String password, String gcmRegId) {`

    ###### Sun Dec 15 15:16:10 MSK 2019
    Resolution: networking failure
    Related commit where logging is improved: 
    f5018dc Base: refactored loginUser, authenticateUser methods, removed unused methods from LmsConnector interface


[x]###### Fri Dec 6 01:48:15 MSK 2019
Topica_iOS:  
resubmit Topica iOS after you have removed Invite Friend button from the side menu (last red button). Apple does not seem to like it at all. Please try to complete asap

The link on About screen doesn't work since the following is missing from info.plist:  
<!--	<dict>-->
<!--		<key>NSAllowsArbitraryLoads</key>-->
<!--		<true/>-->
<!--	</dict>-->
    ###### Sun Dec 15 23:51:33 MSK 2019
    Done in
    ```
    commit 0c3cbc823ce3e2dcc5fd288d0f8d0f750266d17f
    Author:     Vlad Zamskoi <v.mobileAppSoft@gmail.com>
    AuthorDate: Fri Dec 6 21:53:07 2019 +0300
    Commit:     Vlad Zamskoi <v.mobileAppSoft@gmail.com>
    CommitDate: Fri Dec 6 21:53:07 2019 +0300

        1.9.66.20191206_Topica_iOS
        
        ---
        On branch:
        master
    ```


[x]###### Sun Dec 15 23:53:35 MSK 2019
Topica_Android  
Dec 11th
VocabularyWord Practice
    translation shall be Vietnamese
    Fixed in  
    b055492 (origin/master, origin/HEAD) Topica: DialogReview, VocabularyWord Practice: Fixed: translation shall be Vietnamese


[x]###### Mon Dec 16 00:26:14 MSK 2019
Topica_Android  
GenderAge forms don't appear during login  
    ```
    commit 3f3df0e6fdc61229d028dfe69083e46087af77e9
    Author:     Vlad Zamskoi <v.mobileAppSoft@gmail.com>
    AuthorDate: Mon Dec 16 03:58:40 2019 +0300
    ```

[x]###### Sun Dec 15 16:10:39 MSK 2019
Topica_Android
Crash on clicking system_back after going to "InviteFriend" link from SideMenu  
    ###### Mon Dec 16 04:19:20 MSK 2019
    Doesn't reproduces at 
    ```
    commit 3f3df0e6fdc61229d028dfe69083e46087af77e9
    Author:     Vlad Zamskoi <v.mobileAppSoft@gmail.com>
    AuthorDate: Mon Dec 16 03:58:40 2019 +0300
    Commit:     Vlad Zamskoi <v.mobileAppSoft@gmail.com>
    CommitDate: Mon Dec 16 03:58:40 2019 +0300
    ```


[x]###### Mon Dec 16 04:14:08 MSK 2019
Topica_Android
    GenderAge forms appears on every start, should appear only after entering email/password  
    ```
    commit b7649fc505ecf656386803c97edd9f6344ec3251
    Author:     Vlad Zamskoi <v.mobileAppSoft@gmail.com>
    AuthorDate: Mon Dec 16 05:03:44 2019 +0300
    Commit:     Vlad Zamskoi <v.mobileAppSoft@gmail.com>
    CommitDate: Mon Dec 16 05:03:44 2019 +0300

        Topica: fixed bug: GenderAge forms appears on every start, should appear only after entering email/password
        
        ---
        On branch:
        master
    ```


[x]###### Mon Dec 16 05:14:48 MSK 2019
Topica_Android
    * MainMenu: license expired doesn't become visible after relogin with different account
    * GenderAge form doesn't appear after relogin with different account.  
    ```
    commit 36415469779a768835ab21ecad48c9f02a1daed7
    Author:     Vlad Zamskoi <v.mobileAppSoft@gmail.com>
    AuthorDate: Mon Dec 16 05:42:02 2019 +0300
    Commit:     Vlad Zamskoi <v.mobileAppSoft@gmail.com>
    CommitDate: Mon Dec 16 05:42:02 2019 +0300
    ```


[x]###### Mon Dec 16 05:44:27 MSK 2019
Topica_Android
    GenderAge form: not all the data saved to SIPSession. Looks like the reason is that `RecognizerChannelProvider.getChannel().recreateConnections();` runs in separate thread. So, it's the problem is probably related to thread's cache.  

    ```
    commit ab8c71f698c64f33e14932c1c7a90934bd5372ea
    Author:     Vlad Zamskoi <v.mobileAppSoft@gmail.com>
    AuthorDate: Mon Dec 16 05:58:01 2019 +0300
    Commit:     Vlad Zamskoi <v.mobileAppSoft@gmail.com>
    CommitDate: Mon Dec 16 05:58:01 2019 +0300

        Topica: fixed inconsistent bug: GenderAge form: not all the data saved to SIPSession.
        
        Looks like the reason was that
        `RecognizerChannelProvider.getChannel().recreateConnections();` runs in separate thread. So,
        it's the problem is probably related to thread's cache.
        
        ---
        On branch:
        master
    ```


[x]###### Mon Dec 16 12:46:50 MSK 2019
Topica_Android
    JoinUs in SideMenu leads to "Page not found" on FB  


[x]###### Mon Dec 16 12:40:06 MSK 2019
Topica_Android
    Looks like we still have the same issue as last time:
    12-16 10:42:00.052 18203 18203 E AndroidRuntime: FATAL EXCEPTION: main
    12-16 10:42:00.052 18203 18203 E AndroidRuntime: Process: com.speakingpal.speechtrainer.topica, PID: 18203
    12-16 10:42:00.052 18203 18203 E AndroidRuntime: java.lang.RuntimeException: Unable to start activity ComponentInfo{com.speakingpal.speechtrainer.topica/com.speakingpal.speechtrainer.topica.features.ui.exercises_screens.topica_word_flashcard.TopicaWordFlashcardActivity}: java.lang.IllegalStateException: Only fullscreen activities can request orientation


[x]###### Mon Dec 16 13:19:45 MSK 2019
Topica_Android
    * not enough vertical space in VocabularyWordCard
    * SideMenu: JoinUS: change screen title to "Facebook"

    Fixed in `2.1.98.20191216_Topica_Android`


[x]###### Fri Dec 20 16:17:31 MSK 2019
bug_looping_relogin_K12_iOS
K12_iOS
    Cause: DB returns empty list categories for MainMenu  
        Log message:  
        2019-12-20 16:07:23.547 [INFO] main (ET3MainMenuViewController.m:292): _currentSortedCategories was 0. Loging out to reset process  

    K12:  
        mdVersion	__NSCFString *	@"2ab06608ebc453cdaf0110d2b20e2d20HJHEQKUC"	0x0000600000a2fcc0

        Requesting categories: thread 2  
        Re-download metadata: thread 24  
        [ex reason]	__NSCFConstantString *	@"The resource could not be loaded because the App Transport Security policy requires the use of a secure connection."	0x00007fff80380a60

    LESE working app:  
        #0	0x0000000105fb3666 in -[UnitsProvider updateStoredUnitMetadataWith:version:] at /iOS/1_Code/1_Progress/speakingpalapps_ios_nda/SpeakingPal/SpeakingPal-Base/Classes/Unit/UnitsProvider.m:256
        #1	0x0000000105fb9a04 in -[UnitsProvider customizeAndStoreMetadata:version:] at /iOS/1_Code/1_Progress/speakingpalapps_ios_nda/SpeakingPal/SpeakingPal-Base/Classes/Unit/UnitsProvider.m:729
        #2	0x0000000105fb9735 in -[UnitsProvider reloadMetadataFromLms:] at /iOS/1_Code/1_Progress/speakingpalapps_ios_nda/SpeakingPal/SpeakingPal-Base/Classes/Unit/UnitsProvider.m:721
        #3	0x0000000105fb9b27 in -[UnitsProvider notifyMostRecentMetadataVersion:] at /iOS/1_Code/1_Progress/speakingpalapps_ios_nda/SpeakingPal/SpeakingPal-Base/Classes/Unit/UnitsProvider.m:746
        #4	0x0000000105fffe13 in -[LmsConnector getSessionIdForUsername:password:] at /iOS/1_Code/1_Progress/speakingpalapps_ios_nda/SpeakingPal/SpeakingPal-Base/Classes/LMS/LmsConnector.m:625

            NSString *mdVersion = [response stringForResultPath:@"UnitsMetadataVersion"];
                mdVersion	__NSCFString *	@"edf13604aba33a3c07e2defeeae63ba4DXBADZC9"	0x00006000036ac440

        #5	0x0000000105ffe36b in -[LmsConnector ensureSessionIdExists:] at /iOS/1_Code/1_Progress/speakingpalapps_ios_nda/SpeakingPal/SpeakingPal-Base/Classes/LMS/LmsConnector.m:429
        #6	0x0000000105f4f0db in -[SplashScreenViewController authenticateShouldGetNewSessionAnyway:] at /iOS/1_Code/1_Progress/speakingpalapps_ios_nda/SpeakingPal/SpeakingPal-Base/Classes/UI/Main/SplashScreenViewController.m:667
        #7	0x0000000105f4b9a7 in __37-[SplashScreenViewController doLogin]_block_invoke at /iOS/1_Code/1_Progress/speakingpalapps_ios_nda/SpeakingPal/SpeakingPal-Base/Classes/UI/Main/SplashScreenViewController.m:270


    Ariel:  
        See if you use an account that has a license.
        My sp email one has if you need it


[x]###### Wed Nov 27 17:04:17 MSK 2019
K12_iOS
    * solve a bug (iOS 13 only): Read lessons - screen is not scrollable. Might be in more places where screen/text scrolling is involved
        
        Scroll: need to check, should not take more than 3h.
        
        https://stackoverflow.com/questions/33262575/make-a-uiwebview-as-height-as-its-content-with-auto-layout/42925533

    * update to Firebase
        Firebase: 2-3h.


[x]###### Mon Dec 23 19:41:51 MSK 2019
k12_iOS  
    * change background making it the same as in LESE

    * Fix bug of shifted video frame in interactive dialogs  
        Bad positioning:  
            po self.playerVideoView
            <UIView: 0x7fc055524c90; frame = (0 0; 608 228); layer = <CALayer: 0x600002546220>>

            (lldb) po self.playerLayer
            <AVPlayerLayer:0x600002546720; position = CGPoint (304 114); bounds = CGRect (0 0; 608 228); sublayers = (<AVPlayerLayerIntermediateLayer: 0x600002546140>); allowsGroupOpacity = YES; >

        Good positioning:  
            po self.playerVideoView
            <UIView: 0x7fc057847e40; frame = (0 0; 304 228); layer = <CALayer: 0x6000025c9b40>>

            (lldb) po self.playerLayer
            <AVPlayerLayer:0x6000025c97a0; position = CGPoint (152 114); bounds = CGRect (0 0; 304 228); sublayers = (<AVPlayerLayerIntermediateLayer: 0x6000025c9140>); allowsGroupOpacity = YES; >

    * Disable GenderAgeForm screen  

        ```
        commit 0e3f057869b69ed7f86777e2d11336352c682410
        Author:     Vlad Zamskoi <v.mobileAppSoft@gmail.com>
        AuthorDate: Fri Dec 27 06:24:40 2019 +0300
        Commit:     Vlad Zamskoi <v.mobileAppSoft@gmail.com>
        CommitDate: Fri Dec 27 06:24:40 2019 +0300

            1.1.72.20191227_k12_iOS
            
            ---
            On branch:
            master
        ```

[x]###### Fri Dec 27 16:11:20 MSK 2019
k12_iOS
    * K12: fixed bug: READ Quiz: text in bottom drawer can't be fully seen (not enough vertical space)  
        A1 READ Friends Quiz: open the text (bottom drawer). See that it can be scrolled to the bottom, but when released it goes slightly down so that the bottom lines are hidden and you can’t make it stay fully visible  

    * Interactive dialog:  see if removing static image there before the beginning of video playback improves look and feel  

        Limit: 1h

        ```
        commit c08f02e78154434f4a35d7711ab96c1d5be99d00
        Author:     Vlad Zamskoi <v.mobileAppSoft@gmail.com>
        AuthorDate: Fri Dec 27 17:19:48 2019 +0300
        Commit:     Vlad Zamskoi <v.mobileAppSoft@gmail.com>
        CommitDate: Fri Dec 27 17:19:48 2019 +0300

            1.1.73.20191227_k12_iOS Interactive dialog: removed static image before the beginning of video playback
            
            ---
            On branch:
            master
        ```


[x]###### Sat Dec 28 04:03:35 2019
k12_iOS
    bug. image isn't shown in Read activities and most probably other places withe image. Please check carefully
    ```
    commit 457a904182041795fad9cfe0cba21cb14ce1b96c
    Author:     Vlad Zamskoi <v.mobileAppSoft@gmail.com>
    AuthorDate: Sat Dec 28 04:03:35 2019 +0300
    Commit:     Vlad Zamskoi <v.mobileAppSoft@gmail.com>
    CommitDate: Sat Dec 28 04:03:35 2019 +0300

        K12: fixed bug: image (unit poster) isn't shown in Read activities.
        
        ---
        On branch:
        master
    ```

[x]###### Sat Dec 28 03:38:15 MSK 2019
k12_iOS
* The second speaking dialog video does not appear at all now 
    iPhone 11
    iOS 13.3 (17C54)

    ###### Sat Dec 28 04:06:03 MSK 2019
    Testing on iPhone 11, iOS 13.0
        Works OK  

    ###### Sat Dec 28 17:35:38 MSK 2019  
    MainMenu -> Dialogs -> GoodMorning (1st unit) -> 2nd part of the unit  
    It's the issue related to that specific dialog (at least not to all the dialogs). Checking how the content is different there.

[x]###### Sat Dec 28 17:35:53 MSK 2019
iOS_K12  
No progress displayed for the user, please check if it’s the app issue (or if that’s what you get from the LMS)

    Attachment: 
        * extras/progress_response.xml
        xml response LMS sends back. Definitely some quizzes are there (0 presented in the app) as well as speaking practices. Might be you merged the LESE version logic that uses an older progress format?


    ###### Mon Dec 30 06:41:04 MSK 2019
    Checking
    // EnglishTutor3/UserProfileViewController.h:65  

        ###### Sun Jan 5 05:05:26 MSK 2020
    syncProgressSince LmsConnector.m:1212
        * resetV4ProgressWithBackup ET3DataPersistencyConnection.m:776
        * resetProgressWithBackup ET3DataPersistencyConnection.m:747  
            resetUnitProgress ET3DataPersistencyConnection.m:863
                reset quiz progress ET3DataPersistencyConnection.m:919  


    ###### Sat Jan 4 07:26:50 MSK 2020
    @"<?xml version="1.0" encoding="utf-8"?>\n<Result><LastSync>1578111974</LastSync><Category id="0" count_units="1"><Unit id="4064060"><Branch task_id="2" grade="1"/></Unit></Category><Category id="4421275" count_units="10"><Unit id="4502522" grade="30"><Listen task_id="1"/><Quiz task_id="2" grade="30"/></Unit><Unit id="4505824" grade="30"><Listen task_id="1"/><Quiz task_id="2" grade="30"/></Unit><Unit id="4997273" grade="30"><Listen task_id="1"/><Quiz task_id="2" grade="30"/></Unit><Unit id="4997275"><Listen task_id="1"/></Unit><Unit id="4997281"><Listen task_id="1"/></Unit><Unit id="4997286"><Listen task_id="1"/></Unit><Unit id="4999430" grade="10"><Listen task_id="1"/><Quiz task_id="2" grade="10"/></Unit><Unit id="4999431"><Listen task_id="1"/></Unit><Unit id="4999433"><Listen task_id="1"/></Unit><Unit id="4999434"><Listen task_id="1"/></Unit></Category><Category id="4421277" count_units="9"><Unit id="4505633" grade="0"><Listen task_id="1"/><Listen task_id="2"/><Quiz task_id="2" grade="0"/></Unit><Unit id="450"

    ###### Thu Jan 2 21:17:52 MSK 2020
    Both things needed to make references to swift classes to work in objc files of the target:  
        * including .swift file into the target explicitly (i. e. not through static library)  
        * importing `SpeakingPal-Swift.h` header file  

    Build setting comparison initiated to diagnose the problem that ET3 build fails as soon as `StubUsernameAndPasswordForLoginTest` is referenced from `CustomLoginV4ViewController`. BUT K12 is fine despite that the same swift file is referenced from `CustomEmailLoginViewController`.  


[x]###### Mon Dec 30 06:22:25 MSK 2019
iOS_K12  
Add language picker screen after login  

[x]###### Sat Jan 11 03:41:45 MSK 2020; 1h 20m
snapshot_image_not_shown_in_listen_unit_K12_iOS
K12_iOS
    Looks like a bug - try listen unit - listen

    Vlad:  
    Can you clarify the correct business logic by chance (any hints of what types of content should contain certain combinations of those 3 properties)? 

    Currently as soon as there is any VideoPath, I treat the content as video. But this way turned to be not working at least for listen units (though it worked for all other cases I randomly checked after fixing "Good morning" dialog).

    [6:07:32 PM] Ariel:
    I guess you should just check the lesson type in order to decide. For speaking/dialog (see what you get there exactly) do not show the frame. For other types, do show.

    [6:08:16 PM] Vlad Zamskoi. iOS & Android. Minsk & Tel-Aviv.:
    Well, I doubt that. "Good morning" is a dialog, but there are pictures, not video.
    edited 
    [6:08:20 PM] Ariel:
    I think the only type where you want to disable this is speakV3
    I meant in addition to the existing condition

    [6:10:14 PM] Vlad Zamskoi. iOS & Android. Minsk & Tel-Aviv.:
    So, you mean, the video may be only in Speaking or Dialog, but pictures can be in units of all types, right?

    [6:11:29 PM] Ariel:
    I mean that if
    — the content is video
    — the lesson is of type SpeakV3 (or whatever you see in the app for LESE dialogs)
    than apply the new logic that disables the first video frame to appear

    [6:16:58 PM] Vlad Zamskoi. iOS & Android. Minsk & Tel-Aviv.:
    Ok, will update you as soon as I find how to bring the lesson type to the place where poster-hiding logic is implemented.

    ###### Sat Jan 11 03:59:16 MSK 2020
    Tests:  
    acc: shaunie@speakingpal.com

    [x] InCa Synergies -> Grammar Demo 1 -> 1st part (listening)
    [x] InCa Synergies -> Grammar Demo 2 -> 1st part (Dialog)
    [x] OUP DEMO -> Conference -> Preview
    [x] OUP DEMO -> Conference -> 1st part 
    [x] Listen -> 1st Unit -> 1st part -> Play button
    [x] Speak -> Say The Answers (Unit Menu image)
    [x] Read -> Friends -> 1st part
    [x] Read -> Friends -> 2nd part (quiz) -> bottomDrawer 
    [x] Write -> Spelling 1 (Unit Menu image)
    [x] Dialogs -> Good Morning -> 2nd part  

    ```
    6678a24  04:50 Sat Jan 11 2020  Fixed bug: snapshot_image_not_shown_in_listen_unit
    ```

[x]###### Sat Jan 11 05:19:49 MSK 2020; 15m
k12_iOS 1.1.75.20200111_k12_iOS Release
    ```
    590c1a9  05:18 Sat Jan 11 2020  1.1.75.20200111_k12_iOS
    ```


[x]###### Sat Jan 11 05:01:46 MSK 2020; 2h
bug_vendorID_from_server_not_used_in_contact_us_email_message_LESE_iOS  
LESE_iOS  
    In LESE (same as in K12) we have a mechanism that allows to define for a user a different vendor id than the vendor id embedded in the app. When such a user logs in, the app get this data back from LMS and changes the vendor id. This is only done once.

    In K12 this works well, this is where we originally needed this. In LESE it was just inherited from K12 and we did not have a chance to test it.

    Now we'd like to use this feature in LESE and here's the problem. I've tried to define a different vendor id for a test user and the content I got did match the new vendor id. However, when I clicked on Contact Us the original (old) vendor id appeared in the email subject. So it looks like the app uses 2 different vendor ids at the same time!

    What I need you to check: whether the old vendor id will ever be used in any important functionality such as communication with LMS. If it's just Contact Us, we can live with this. If there are more places where the old id may be used I'd like to know that.

    User account to check with:
    sp929@s.pal 97199294

    You'll see it's mapped to vendor 3671580 (Topica id), so when you login in LESE using this account you'll see the Topica content. Please check the rest per above description.

    ###### Sat Jan 11 05:24:32 MSK 2020
    start

    // SpeakingPal-Base/Classes/Config.m:175
    _sClientLMSVendorId = [Resources localizedStringForKey:@"vendor_id" table:@"branding"];
    == 239

    Presumably, Topica's vendorID is:  3671580  

    > when you login in LESE using this account you'll see the Topica content
    – This is true.  

    ###### Sat Jan 11 06:06:29 MSK 2020
    Searching for the place where content is requested from remote server  

    ###### Sat Jan 11 06:19:55 MSK 2020
    Getting modified vendorID from the server in:  
    // SpeakingPal-Base/Classes/LMS/WebserviceWrapper.m:209  
        dict = {__NSDictionaryM * | 0x109cfb280} 15 key/value pairs
        [0] = @"AreaMetrics" -> 1 key/value pair
        [1] = @"CurrentServerUtcTime" -> 1 key/value pair
        [2] = @"RemoteResourceKey" -> 1 key/value pair
        [3] = @"RemoteResourceSignature" -> 1 key/value pair
        [4] = @"SessionID" -> 1 key/value pair
        [5] = @"Vendor" -> 1 key/value pair
        [6] = @"AdProvider" -> 1 key/value pair
        [7] = @"Username" -> 1 key/value pair
        [8] = @"UnitsMetadataVersion" -> 1 key/value pair
        [9] = @"LicenseSignature" -> 1 key/value pair
        [10] = @"ServerMessages" -> 0 key/value pairs
        [11] = @"LmsSessionExpirationDate" -> 1 key/value pair
        [12] = @"ResultCode" -> 1 key/value pair
        [13] = @"SupportedLanguages" -> 1 key/value pair
        [14] = @"LastSync" -> 1 key/value pair

    ###### Sat Jan 11 06:32:22 MSK 2020

    // SpeakingPal-Base/Classes/LMS/LmsConnector.m:594
        -[WebserviceWrapper AuthenticateUsingImei:user_name:password:platform:app_id:vendor_id:] WebserviceWrapper.m:209
        -[LmsConnector getSessionIdForUsername:password:] LmsConnector.m:532
        -[LmsConnector ensureSessionIdExists:] LmsConnector.m:429
        -[SplashScreenViewController authenticateShouldGetNewSessionAnyway:] SplashScreenViewController.m:667
        __37-[SplashScreenViewController doLogin]_block_invoke SplashScreenViewController.m:270
        _dispatch_call_block_and_release 0x0000000182512a54
        _dispatch_client_callout 0x0000000182512a14
        _dispatch_root_queue_drain 0x000000018251fea4
        _dispatch_worker_thread3 0x000000018251fa38
        _pthread_wqthread 0x00000001827bb06c
        start_wqthread 0x00000001827bab6c

    ```
    e5646f3  07:15 Sat Jan 11 2020  Fixed bug_vendorID_from_server_not_used_in_contact_us_email_message_LESE
    ```

[x]###### Sat Jan 11 07:24:07 MSK 2020; 10m 15m
LESE_iOS 3.4.282.20200111 Release 


[x]###### Sun Jan 12 08:02:23 MSK 2020; 30m, 30m
bug_not_all_categories_displayed_after_switching_to_regular_account_from_account_with_modified_vendorID_LESE_iOS
LESE_iOS
    Reported issue for LESE iOS: login with the test account (sp929), then logout and login with a regular account. There is some incorrect stuff in the dashboard categories
    I didn’t see this myself yet, try to reproduce

    ###### Sun Jan 12 08:08:31 MSK 2020
    start

    [x] login with the test account (sp929),  
    [x] then logout  
    [x] and login with a regular account  

    ###### Sun Jan 12 08:30:59 MSK 2020
    reproduced the problem with the content after relogin with different user. The list of categories on MainMenu isn't the same comparing to the list I'm getting if logging in with regular user (shaunie@speakingpal.com) in the 1st place.

    Regular login: more than 5 categories shown for shaunie@speakingpal.com
    Relogin after sp929: only 2 categories are shown on MainMenu  

    ```
    44d895e  07:43 Wed Jan 15 2020  LESE: Fixed bug_not_all_categories_displayed_after_switching_to_regular_account_from_account_with_modified_vendorID
    ```

    ###### Wed Jan 15 06:30:26 MSK 2020
    start  

[x]###### Wed Jan 15 15:18:19 MSK 2020; 1.5h
bug_sentences_and_quizzes_count_not_shown_on_userProfileScreen_LESE_iOS
LESE_iOS
    ###### Wed Jan 15 15:19:18 MSK 2020 start

    ```
    05235f3  16:42 Wed Jan 15 2020  LESE: Fixed: bug_sentences_and_quizzes_count_not_shown_on_userProfileScreen_lese
    ```

[x]###### Sun Jan 19 18:51:57 MSK 2020; i 20m v 10m
update_copyright_years_LESE_iOS
LESE_iOS
    3. About and Settings - should be updated 2009-2020
    
    ###### Sun Jan 19 15:00:07 MSK 2020
    delegated to @IliaShved  

    ```
    b665eac  18:31 Sun Jan 19 2020  LESE : copyright years updated
    ```

    ###### Mon Jan 20 01:37:41 MSK 2020
    Test passed  

[x]###### Mon Jan 20 00:28:01 MSK 2020; v 10m 20m 10m  
bug_changing_UI_from_background_on_entering_mainMenu_LESE_iOS
LESE_iOS

    ```
        Main Thread Checker: UI API called on a background thread: -[UIImageView setImage:]
    PID: 960, TID: 2389687, Thread name: (none), Queue name: com.apple.root.default-qos.overcommit, QoS: 21
    Backtrace:
    4   EnglishTutor3                       0x000000010091fba4 -[ET3MainMenuViewController updateAchievements] + 1308
    5   EnglishTutor3                       0x000000010091a960 -[ET3MainMenuViewController showProgressFromNotification] + 60
    6   CoreFoundation                      0x0000000182b2513c <redacted> + 20
    7   CoreFoundation                      0x0000000182b246dc <redacted> + 420
    8   CoreFoundation                      0x0000000182b24440 <redacted> + 60
    9   CoreFoundation                      0x0000000182ba1e24 <redacted> + 1408
    10  CoreFoundation                      0x0000000182a5ad60 _CFXNotificationPost + 380
    11  Foundation                          0x0000000183487348 <redacted> + 68
    12  EnglishTutor3                       0x0000000100a26de0 -[LmsConnector syncProgressSince:] + 1808
    13  EnglishT2020-01-20 00:20:46.753 [DEBUG] main (Resources.m:103): Image cache size is: 77
    utor3                       0x0000000100a266c4 -[LmsConnector syncProgress] + 48
    14  Foundation                          0x000000018358f0f4 <redacted> + 996
    15  libsystem_pthread.dylib             0x00000001827bc2b4 <redacted> + 308
    16  libsystem_pthread.dylib             0x00000001827bc180 <redacted> + 0
    17  libsystem_pthread.dylib             0x00000001827bab74 thread_start + 4
    2020-01-20 00:20:46.765642+0300 EnglishTutor3[960:2389687] [reports] Main Thread Checker: UI API called on a background thread: -[UIImageView setImage:]
    PID: 960, TID: 2389687, Thread name: (none), Queue name: com.apple.root.default-qos.overcommit, QoS: 21
    Backtrace:
    4   EnglishTutor3                       0x000000010091fba4 -[ET3MainMenuViewController updateAchievements] + 1308
    5   EnglishTutor3                       0x000000010091a960 -[ET3MainMenuViewController showProgressFromNotification] + 60
    6   CoreFoundation                      0x0000000182b2513c <redacted> + 20
    7   CoreFoundation                      0x0000000182b246dc <redacted> + 420
    8   CoreFoundation                      0x0000000182b24440 <redacted> + 60
    9   CoreFoundation                      0x0000000182ba1e24 <redacted> + 1408
    10  CoreFoundation                      0x0000000182a5ad60 _CFXNotificationPost + 380
    11  Foundation                          0x0000000183487348 <redacted> + 68
    12  EnglishTutor3                       0x0002020-01-20 00:20:46.768 [DEBUG] main (Resources.m:103): Image cache size is: 78
    0000100a26de0 -[LmsConnector syncProgressSince:] + 1808
    13  EnglishTutor3                       0x0000000100a266c4 -[LmsConnector syncProgress] + 48
    14  Foundation                          0x000000018358f0f4 <redacted> + 996
    15  libsystem_pthread.dylib             0x00000001827bc2b4 <redacted> + 308
    16  libsystem_pthread.dylib             0x00000001827bc180 <redacted> + 0
    17  libsystem_pthread.dylib             0x00000001827bab74 thread_start + 4
    2020-01-20 00:20:55.182 [INFO] RecognizerChannel (MrcpClient.m:211): Created MRCP socket for 34.204.18.39:1544
    2020-01-20 00:20:55.196 [DEBUG]  (ET3DataPersistencyConnection.m:372): Counted average score 0.000000 for 0 sentences.
    2020-01-20 00:20:55.202 [DEBUG]  (ET3MainMenuViewController.m:911): got QuizGrades after sumAndCountSentenceScore
    2020-01-20 00:20:55.213 [DEBUG]  (Resources.m:103): Image cache size is: 79
    2020-01-20 00:20:55.273769+0300 EnglishTutor3[960:2389517] categoryScore: 0, cdata.score: 0
    2020-01-20 00:20:55.275 [DEBUG] [EnglishTutor3.MainMenuViewControllerEnglishTutor loadCoverageInBg]:987 (UnitCategory.m:98): in updateCategory before save to store
    2020-01-20 00:20:55.282 [DEBUG] [EnglishTutor3.MainMenuViewControllerEnglishTutor loadCoverageInBg]:987 (DataPersistencyConnection.m:154): Data saved into store.
    ```  

    ```
    be6bade  01:13 Mon Jan 20 2020  LESE: Fixed: bug_changing_UI_from_background_on_entering_mainMenu_lese
    ```

    ###### Mon Jan 20 01:33:39 MSK 2020
    Testing with shaunie

    ###### Mon Jan 20 01:36:30 MSK 2020
    Test passed

[x]###### Thu Jan 16 13:55:40 MSK 2020; i 1h v 10m
crash_on_download_sound_video_from_dialog_review_LESE_iOS
LESE_iOS
    1. Crash when selecting the sounds from the review page - and then trying to download a sound video from the short list 

    ###### Sun Jan 19 15:00:07 MSK 2020
    delegated to @IliaShved

    ```
    428926c  17:34 Sun Jan 19 2020  LESE: Fixed: fixed crash while trying to play pronunciation lesson
    ```

[x]###### Mon Jan 20 02:49:17 MSK 2020; v 20m
LESE_Android
    ```
    b2e168b  02:47 Mon Jan 20 2020  Base, LESE, Topica: created new manual_tests package and Implemented: StubUsernameAndPasswordForLoginTest
    ```

[x]###### Mon Jan 20 15:04:12 MSK 2020; i 20m v 20m
screenshots_for_appstore_LESE_iOS  
LESE_iOS
    [](./extras/1screenshots_for_appstore.png)
    
    Need to take 4 new screenshots like on the picture (app background has been changed).
    * 1242 × 2208 (iPhone 5.5 inches)
    * 1242 × 2688 (iPhone 6.5 inches)
    * 2048 × 2732 (iPad 3rd gen 12.9 inch)

    ###### Mon Jan 20 22:05:21 MSK 2020
    3.4.284_Lese_iOS is waiting for Review

[x]###### Thu Jan 16 13:55:40 MSK 2020; i 2h v 20m, 1.5h
bug_purchased_shopping_items_shown_with_price_lese_iOS
LESE_iOS  
    2. Store page - I am using a full license but at the store I can see that all packages are available including all content. The only one that is not available is level 3.  Tried to purchase as a beta - should work - but got an error connecting to the store.  Should be tested differently?

    #2 in LESE issues above is about presenting the already purchased plans in the Shop page. As you may remember, such plans should appear with "Purchased" word instead of the price. For some reason this logic was broken. Please check.

    ###### Sun Jan 19 15:00:07 MSK 2020
    delegated to @IliaShved

    ###### Sun Jan 19 18:59:32 MSK 2020
    User to test:  
        sp927@s.pal  
        89822064
        it's given `Everyday & Friends`

    Ariel
    As I think about the original logic I remembered, I'm not sure what happens with different periods we provide (1 month/6 months/1 year).  It's possible that as we used only the content packages before (for the same period of time), the PURCHASED word might be connected to the content and not to the period. It would be great if you could check that.
    You may want to compare with Android. I think there we will show the content packages in the Shop

    ```
    88999d2  18:24 Sun Jan 19 2020  LESE : show "Purchased" label for already purchased items
    ```

    ###### Mon Jan 20 01:33:21 MSK 2020
    Vlad:  
    Test didn't pass  

    ###### Mon Jan 20 02:56:43 MSK 2020
    Test passed on Android:  

    Expected  
    [](./extras/1_bug_purchased_shopping_items_shown_with_price.jpg)

    Details:  
    [](./extras/2bug_purchased_shopping_items_shown_with_price_lese_iOS.md)  

    ###### Mon Jan 20 22:19:58 MSK 2020
    Ariel:  
    We manage the purchase plans per platform/store (Android/iOS/etc), so we have more control.  Each platform has somewhat different offerings, so that's all right. Let's ignore this issue for the moment. We can live with it. Probably it did not work in the last version either (or at least did not work the way we thought it should).

[x]###### Wed Jan 15 18:31:40 MSK 2020; v 2h
keyboard_overlaps_SignUpFailed_popup_k12_iOS  
k12_iOS  
    [](./Extras/keyboard_overlaps_SignUpFailed_popup_k12.jpg)

    In the above, in real life the open keyboard hides the Ok button, so it's not clear now to continue. Can we move the alert higher? Or make the keyboard hidden automatically?
    NOTE: the problem seems to appear only once. On subsequent error the keyboard is hidden automatically.  

    ###### Wed Jan 22 19:53:15 MSK 2020
    @VladZams reproduces consistently on iPhone SE  

    ```
    775df26  19:17 Wed Jan 22 2020  K12: NO LOGIC CHANGED. Minor code style improvements
    ```
    VietnamK12/CustomEmailLoginViewController.m:19  

    ###### Wed Jan 22 22:43:34 MSK 2020
    fixed in  
    ```
    78ab09d  22:43 Wed Jan 22 2020  k12: Fixed: bug keyboard_overlaps_SignUpFailed_popup_k12_iOS
    ```

[x]###### Wed Jan 15 16:47:38 MSK 2020; v 15m, 1h, i , v 20m
navigate_to_shopScreen_on_click_on_locked_unit_k12_iOS    
k12_iOS  
    Click on a locked unit (e.g. as a guest) offers the single category package (old feature). Should go directly to the Shop page instead.
    edited  

    ###### Thu Jan 16 06:42:35 MSK 2020
    started  

    ###### Thu Jan 16 08:04:31 MSK 2020
    There is a problem with shoppingListItems background  

    By now the shopScreen starts fine, but shoppingListItems setup isn't ok:
 
    @ArielV_customer:
    Probably when launching the screen from unit/category it limits scope by category. If you change the logic, make sure the change is for K12 only. In LESE we still want to show the category specific behavior. 

    @IliaShved: implemented in 
    ```
    fbd25b4  01:23 Wed Jan 22 2020  K12: added CustomShopViewController that inherits from ShopViewController instead of use one from ET3
    ``` 

    @VladZams  
    Tests passed  

[x]###### Wed Jan 15 18:31:46 MSK 2020; i 40m, v 10m
add_mandatory_field_indicator_to_userDetailsAfterLogin_k12_iOS  
k12_iOS  
    [](./Extras/add_mandatory_field_indicator_to_userDetailsAfterLogin_k12.jpg)
    In the above, could you please add a star (*) before the Name  and the Email field names so that they look mandatory. Mobile is not mandatory.

    The result should show fields as follows:
    * Name
    * Email
    Mobile

    ###### Sun Jan 19 20:58:17 MSK 2020
    Delegated to @IliaShved  

    Implemented in  
    ```
    1fae14d  19:29 Sun Jan 19 2020  K12: Email and Name fields marked as mandatory
    ```
    
    ###### Wed Jan 22 22:47:47 MSK 2020
    @VladZams
    Testing rebased on master:  
    ```
    877ea82  19:29 Sun Jan 19 2020  K12: Email and Name fields marked as mandatory
    ```  
    ###### Wed Jan 22 22:56:51 MSK 2020
    Test passed.  

[x]###### Thu Jan 23 01:30:11 MSK 2020; v 15m
    Release 
    ```
    2ccc85b  00:16 Thu Jan 23 2020  1.1.76.20200122_k12_iOS
    ```

[x]###### Sat Jan 25 18:21:32 MSK 2020; 1h
submitting_report_for_dec_2019_mngmt_sp
mngmt_sp
    Some work needed to be done in order to filter out time records for specific period and exclude already paid hours for Dec 1st 2019  

[x]###### Sat Jan 25 21:28:38 MSK 2020; 1h
support_sourceTree_and_vscode_in_prepare_commit_msg_hook_mngmt_sp
mngmt_sp

    Write python script that inserts branch_name 
        if in default_commit_message_template mode {
            // for VSCode
            before line that starts with "# Please enter the commit message for your changes"
        } else {
            // for SourceTree
            to the end of received commit message
        }
    
    branch_name message:  
        BRANCH_NAME=$(git branch | grep '*' | sed 's/* //')
        "\n\n---\nOn branch:\n$BRANCH_NAME"

    input parameters:  
    $1: path to file with original message

    Existed approach (works properly for VSCode only)
    echo "\n\n---\nOn branch:\n$BRANCH_NAME" | cat - "$1" > temp && mv temp "$1"

    Done in  
    ```
    2b0c296  04:46 Sun Jan 26 2020 speakingpal_tasks_management  Backup ###### Sun Jan 26 04:46:21 +03 2020
    ```

[x]###### Mon Jan 27 00:05:25 MSK 2020; 15m  
LESE_iOS 8-9 hours budgeted  
    [] Chage top_bar_title from `shop` to `Hello <userName>!`  
    [] OnClick: open the "All Levels 2nd Year" plan
    adapt_user_email_for_username_views_LESE_iOS  
    bug_userProfile_progress_gauges_blinking_when_rendering_LESE_iOS  
    mainMenu_mic_sentence_count_navigate_to_userProfile_onClick_LESE_iOS  

[x]###### Sun Jan 26 23:52:21 MSK 2020; 15m, 25m  
adapt_user_email_for_username_views_LESE_iOS  
LESE_iOS  **Merged**  **Estimate**: Wed Jan 29
    ``` ee9e70b  07:35 Thu Jan 30 2020 speakingpalapps_ios_nda  LESE: NO LOGIC CHANGED. removed unused method ```

    Shortening email to the first part - make sure to present in the same way (for email registered users):
        [] a/ In the dashboard
        [] b/ In the User profile page

    let formattedName = self.userName.components(separatedBy: "@").first ?? ""

[x]###### Sun Jan 26 23:54:36 MSK 2020; 30m
mainMenu_mic_sentence_count_navigate_to_userProfile_onClick_LESE_iOS  
LESE_iOS  **Merged**  **Estimate**: Wed Jan 29  
    In the dashboard - the mic & sentence count at the top - make them clickable to take the user to the User profile page as well.  
    
    ###### Thu Jan 30 10:08:43 MSK 2020
    Done in  
    ```3370651  10:07 Thu Jan 30 2020 speakingpalapps_ios_nda  LESE: Implemented: mainMenu_mic_sentence_count_navigate_to_userProfile_onClick_LESE_iOS```  

[x]###### Mon Jan 20 08:17:14 MSK 2020; v 2h15m 20m, i 3h 30m, 2h 30m, 2h 30m, v 30m 30m
new_shop_screen_LESE_iOS  
LESE_iOS  **Merged**  
7e09969  14:34 Thu Jan 30 2020 speakingpalapps_ios_nda  4.1.285.20200130_LESE_iOS

    [Archive](./extras/archive_new_shop_screen_LESE_iOS.md)

[x]###### Sun Jan 26 23:54:36 MSK 2020; 1h  
LESE_iOS  **Merged**  **Estimate**: Wed Jan 29  
bug_userProfile_progress_gauges_blinking_when_rendering_LESE_iOS  
    User profile page - progress: try this in a real device. The progress gauges are rendered twice with some overlapping. Looks a bug. Please fix.  
    
    2af0d17  11:57 Thu Jan 30 2020 speakingpalapps_ios_nda  Base, LESE: Fixed: bug_userProfile_progress_gauges_blinking_when_rendering_LESE_iOS  

[x]###### Thu Jan 30 09:51:49 MSK 2020
release_4.1.285.20200130_LESE_iOS  
LESE_iOS  **Done**: **Estimated**: Thu Jan 30, 9am ISR  
7e09969  14:34 Thu Jan 30 2020 speakingpalapps_ios_nda  4.1.285.20200130_LESE_iOS  

    Release to TestFlight:  
        * new_shop_screen_LESE_iOS  
        * mainMenu_mic_sentence_count_navigate_to_userProfile_onClick_LESE_iOS  
        * bug_userProfile_progress_gauges_blinking_when_rendering_LESE_iOS  

[x]###### Thu Jan 30 16:31:53 MSK 2020; i 1h 30m, v 50m  
shop_ui_make_whole_purchase_item_clickable_LESE_iOS
LESE_iOS **Merged**:  
f41b4f8  23:43 Wed Feb 05 2020 speakingpalapps_ios_nda  webshop url changed
    Make all the area with purchase_item_div to be clickable, not just price_label  

    Requested >@ArielV_customer: 
        
        find the following part:  
        ``` html
        <div class="container-for-price">
        <div>...</div>
        <div>...</div>
        <div>...</div>
        </div>
        ```

        And change it to  
        ``` html
        <div class="container-for-price">
        <div class="purchase-plan clickable">...</div>
        <div class="purchase-plan clickable">...</div>
        <div class="purchase-plan clickable">...</div>
        </div>
        ```

        ###### Thu Jan 30 17:17:37 MSK 2020
        @ArielV_customer:  
        Will update on the server in a few min

    Archive:  
    [link](./extras/1_addClickableArea_new_shop_screen_LESE_iOS.md)  

[x] ###### Thu Jan 30 14:36:56 MSK 2020; i 40m, 1h, v 10m
2nd_iter_new_shop_screen_LESE_iOS (**branch wansn't created accoring to workflow**. Check **shop_ui_make_whole_purchase_item_clickable_LESE_iOS** instead)  
LESE_iOS **Merged**  
f41b4f8  23:43 Wed Feb 05 2020 speakingpalapps_ios_nda  webshop url changed  

    ###### Thu Jan 30 06:42:03 MSK 2020
    [x] bug_disable_zoom_new_shop_ui_LESE_iOS  
       
       @VladZams >@ArielV_customer:  
        Currently shop_screen can be zoomed. Including the cases when zoom is triggered by double_touch on some views. Should we try to disable zooming completely?  

        ###### Thu Jan 30 17:14:56 MSK 2020
        @ArielV_customer: good idea  

    ###### Thu Jan 30 07:09:30 MSK 2020
    DoneFinally:  
        [x] Remove "Test" from `TestPurchaseSubscriptionVC` name  
    
    URL to load:  
    https://cdn.speakingpal.com/content/public/lese-shop/shop.html  

    [Archive](./extras/archive_new_shop_screen_LESE_iOS.md)  

[x]###### Wed Feb 5 21:02:19 MSK 2020; i 10m, v 10m  
shop_change_remote_source_url_LESE_iOS
LESE_iOS **Merged**    est **15m**
2763627  03:10 Mon Feb 10 2020 speakingpalapps_ios_nda  Added todo comment  

    Please change the Shop page location to  
    https://cdn.speakingpal.com/content/public/lese-shop/shop.html  
  
    [Archive](./extras/archive_new_shop_screen_LESE_iOS.md)  

[x]###### Wed Feb 5 21:49:30 MSK 2020; i 20m, 2h, 20m, v 20m  
license_expired_view_LESE_iOS
LESE_iOS **merged**  est: **4h**
898ebee0  12:37 Sat Feb 15 2020 speakingpalapps_ios_nda  LESE: added license expiration label and renew button to UserProfileVC; navigation to shopScreen implemented
    Note: the implementation started back to Sep 2019  
    [Original task details (UI mock is out of date)](https://docs.google.com/document/d/1h9kHBq4TkF8hUooM__9WmfEfX_BkGdD7eDj99Ukpe5c/edit?usp=sharing)  
    
    [x] switch to branch, run and complete `git rebase master`

    [x] MainMenu screen 
        [x] status_text to the left of avatar
            fontColor: white
        
        [x] Renew button  to the right from avatar
            fontColor: white
            background: blue

    [x] Profile screen
        [x] status_text to the left of avatar
            fontColor: white
        
        [x] Renew button  to the right from avatar
            fontColor: white
            background: blue

    ###### Tue Feb 18 06:46:49 MSK 2020
    Merged to master  

[x]###### Tue Feb 18 09:46:39 MSK 2020; v 1.25h  
bug_mainMenu_progress_gauges_animation_not_smooth_LESE_iOS  
LESE_iOS  **merged**  
febe930  10:50 Tue Feb 18 2020 speakingpalapps_ios_nda  Fixed: bug_mainMenu_progress_gauges_animation_not_smooth_LESE_iOS  
    
    The progress gauge animation - fixed at the MY PROGRESS page. But still behaves the old wrong way at the main menu page. Use the following account to see:
        fp381@s.pal
        12345678  

    
    Solution idea:  
    move `[self observeSynctNotifications];` 
        from `- (void)startScreen`
        to `after LanguageSelectionGenderAge forms are completed`  

[x]###### Thu Feb 6 00:58:43 MSK 2020; v 15m 
test_ui_of_shop_plans_that_not_yet_available_on_server_LESE_iOS  
LESE_iOS **merged**
d340670  11:10 Tue Feb 18 2020 speakingpalapps_ios_nda  Implemented
    
    Shop: Test shop plans that turned to be not returned by server  
        * com.speakingpal.speakingpal.itunes.inapp.45806 (1 month)
        * com.speakingpal.speakingpal.itunes.inapp.45808 (6 months)  

    @VladZams >@ArielV_customer: we've added mapping logic for new ids, but for some reason these ids are not present in the same array where all others plans reside after the parsing.  

        @ArielV_customer: 
        Probably these are not (yet) a part of the purchase plans. We'll add them when the app is to be released, but for now we have to keep them this way.

        @VladZams: I'll then mock them just if they were parsed to see if UI works good.

        @VladZams >@IliaShved: please, estimate, how much time do we need to mock parsed results?

            @IliaShved: 
            Do we really need to mock it? If we're talking about UI, can't we just changed mapping logic a bit - change the values of "price-1m" and "price-6m" keys to the "com.speakingpal.speakingpal.full1year" (which is currently working) instead of unavailable ones. Yes, we will have 3 absolutely equal elements, but i think it is enough for UI tests. 
            And it would be 1 minute work.

        >@VladZams: defined `shop_ui_substitute_purchase_plans_for_tests_LESE_iOS` following @IliaShved suggestion  

        ###### Tue Feb 18 11:03:40 MSK 2020  
        febe930  10:50 Tue Feb 18 2020 speakingpalapps_ios_nda  Fixed: bug_mainMenu_progress_gauges_animation_not_smooth_LESE_iOS

    @VladZams is implementing the suggested solution as a temporary one to see UI works fine.  

[x]###### Tue Feb 18 11:04:46 MSK 2020; v 30m
release_4.1.286.20200218_LESE_iOS  **Done**: **Tue, Feb 18th morning**
LESE_iOS
0ea8644  11:30 Tue Feb 18 2020 speakingpalapps_ios_nda  4.1.286.20200218_LESE_iOS

    Release to TestFlight:  
        1. test_ui_of_shop_plans_that_not_yet_available_on_server_LESE_iOS  
        2. bug_mainMenu_progress_gauges_animation_not_smooth_LESE_iOS  
        3. shop_ui_make_whole_purchase_item_clickable_LESE_iOS  
        4. shop_change_remote_source_url_LESE_iOS  
        5. license_expired_view_LESE_iOS  

[x]###### Wed Feb 19 11:17:27 MSK 2020; v 40
bug_old_shop_appears_when_pressing_locked_unit_LESE_iOS  
LESE_iOS **merged**  
333a960  12:05 Wed Feb 19 2020 speakingpalapps_ios_nda  Fixed. Additionally fixed the navigation to the new Shop from UserProfileScreen
    
    Still the old shop appears when pressing a locked unit (try guest account) or from the profile screen. Was reported already. Please fix & test.  

    ###### Wed Feb 19 11:35:43 MSK 2020
    Logic that needs to be overridden for LESE: SpeakingPal-Base/CategoryCatalogViewController.m:1966
    ```
        [self performSegueWithIdentifier:@"ShopOneSegue"
                                sender:nil];
    ```

    Related:
        * (may be used as a refernce) 1f65fbe  23:53 Tue Jan 21 2020 speakingpalapps_ios_nda  K12: navigate to shop screen on click on locked unit  

    Log:  
        @ArielV_customer:  The OLD shop was shown once. We do not have a clear reproduction scenario, happened just once after installation. Please check the code for possibility of that to happen.  
        
        @VladZams >@ArielV_customer:  
            it's very strange... for me it sound like fantastic. 
            Did the same app worked fine just by reentering the shop (without killing and relaunching the app)?

            @ArielV_customer:  
            Reported as "Only after a minute or two in which I entered and left the shop page several times did it opened with. DOWNLOADING message and showed the new shop page"  

        @VladZams >@IliaShved: do you see any possibility this could happen? Do not spend much time trying to understand bug_report, it is quite unclear.
            
            @IliaShved: 
            The only possibility for such behavior is - navigation to "Shop" screen was not from 
            "Main Menu", but from "My Progress" or "Lessons List" screens. If it's not so, it's a miracle :)
        
        @VladZams >@ArielV_customer?:  
            We haven't yet updated buttons handlers on any screen except of MainMenu. It's about 30m of work. Please, approve.  

[x]###### Wed Feb 19 11:28:13 MSK 2020; v 60  
shop_enable_all_3_purchase_plans_LESE_iOS  
LESE_iOS **merged**  
99019d8  12:36 Wed Feb 19 2020 speakingpalapps_ios_nda  Implemented: shop_enable_all_3_purchase_plans_LESE_iOS

    Mapping of the additional in-apps as I sent you before - also not there yet.  

    ###### Wed Feb 19 12:13:46 MSK 2020
    @ArielV_customer:  Definition completed. The previous shop version looks like this now:  [new_purchase_items](./extras/new_purchase_items.shop_enable_all_3_purchase_plans_LESE_iOS.jpg)  

[x]###### Wed Feb 19 12:38:52 MSK 2020; v 25m
4.1.287.20200219_LESE_iOS
LESE_iOS  **done** ###### Wed Feb 19 12:39:31 MSK 2020  
99019d8  12:36 Wed Feb 19 2020 speakingpalapps_ios_nda  Implemented: shop_enable_all_3_purchase_plans_LESE_iOS

    * bug_old_shop_appears_when_pressing_locked_unit_LESE_iOS      
    * shop_enable_all_3_purchase_plans_LESE_iOS  

[x] ###### Sun Feb 9 02:53:13 MSK 2020; i 10m, v 30m
bug_focus_not_go_away_after_error_popup_shop_screen_LESE_iOS  
LESE_iOS **cancelled**:  
f41b4f8  23:43 Wed Feb 05 2020 speakingpalapps_ios_nda  webshop url changed  
    
    Found: bug_focus_not_go_away_after_error_popup_LESE_iOS.mov  
    [video](./extras/bug_focus_not_go_away_after_error_popup_LESE_iOS.mov)  

    ###### Wed Feb 19 12:54:24 MSK 2020
    @ArielV_customer: That’s all right, we can fix this later

    Before ###### Wed Feb 19 12:56:02 MSK 2020  
    @VladZams >@IliaShved: Would you please estimate the fix?  
        @IliaShved: the problem is with the html page source:  
            There is JS function `bgChange()` at the top of shop.html file that changes the style of element of class `purchase-plan clickable` when the element is hovered. So, the color property is changed by JS script, it is not changed in a usual way when `:hover` modifier applied.  
                As a result, the selected_state_color stays even after the selection (hovering) is over.  

        @VladZams >@IliaShved: please, if possible to do in 10min, fill 2 gaps in the report above:  
            * JS script name (source file and name of the function that does that job)  
            * name(id, class) of the element that is targetted by the color-altering-function  

            @IliaShved: done  

    Related: shop_ui_make_whole_purchase_item_clickable_LESE_iOS  

[x]###### Thu Feb 20 08:21:15 MSK 2020; v 30m  
bug_old_shop_opens_when_category_clicked_LESE_iOS  
LESE_iOS  **merged**
71a56ab  14:24 Thu Feb 20 2020 speakingpalapps_ios_nda  Fixed: bug_old_shop_opens_from_category_units_list_screen_LESE_iOS

    @ArielV_customer:  
        Last version: a click on the category still brings the old shop. Please fix and search for potential other places, as we asked before. We might forget some places, or there may be some conditional behavior that is not easy to test.

        [6:48:40 PM] Vlad Zams. iOS & Android. Minsk & Tel-Aviv.:
        Got it. I've tested clicks on locked units. Are you clicking on any category itself, not on some unit within the category?

        [6:54:32 PM] Ariel:
        Exactly

[x]###### Thu Feb 6 00:49:55 MSK 2020; i 20m, v 30m
shop_ui_substitute_purchase_plans_for_tests_LESE_iOS
LESE_iOS **cancelled** Not relevant since real purchase items (shop plans) are available already  
06ef825  21:45 Thu Feb 20 2020 speakingpalapps_ios_nda  Added test user credentials to check license_Expired_Status_View


    Test UI while 2 purchase plans are ready on the server side:  

    @VladZams >@IliaShved?: what's the estimate for the following?  
        
        @IliaShved:  

    [] Create `ShopPurchasesPlansUITest.swift` in `ManualTests` project dir.
    [] set `ShopPurchasesPlansUITest.isEnabled` to `true`
    [] implement the following logic:  
        if ShopPurchasesPlansUITest.isEnabled {
            change the values of "price-1m" and "price-6m" keys to the "com.speakingpal.speakingpal.full1year" (which is currently working) instead of unavailable ones. 
        }
        Yes, we will have 3 absolutely equal elements, but i think it is enough for UI tests. 

    Shop plans that so far are not ready on the server side but should become ready at some point soon:  
        * com.speakingpal.speakingpal.itunes.inapp.45806 (1 month)
        * com.speakingpal.speakingpal.itunes.inapp.45808 (6 months)  

    [Archive](./extras/archive_new_shop_screen_LESE_iOS.md)  

[x] ###### Thu Feb 27 11:01:27 MSK 2020; i 30m, v 30m
relese_4.1.288.20200225_LESE_iOS
LESE_iOS **done**  
926dec3  23:20 Tue Feb 25 2020 speakingpalapps_ios_nda  4.1.288.20200225_LESE_iOS


[x]###### Tue Feb 25 00:28:10 MSK 2020; v 20m
setup_sandbox_user_for_ilia_LESE_iOS  
LESE_iOS 

    https://appstoreconnect.apple.com/access/testers
    
    vzamskoi@gmail.com
    horL7611
    dog
    disaaa
    Jan 1st  

    @IliaShved: sandbox user worked fine: purchase can be tested.  

[x] ###### Mon Feb 24 23:41:00 MSK 2020; v 15m, 20m  
offer_new_work_schedule_mngmt_SP  
_mngmt_SP  
    
    @ArielV_customer: discussed some half a year ago...  

    ###### Thu Feb 27 11:23:18 MSK 2020
    @VladZams > @ArielV_customer:  I've freed up next week starting from Wed: 
        * 1.5h I'm the morning  
        * and 4h in the evening every day  
        * Mon and Tue morning I will be also available  

    ###### Thu Feb 27 11:24:18 MSK 2020  
    About #dieHard tag for hard_deadlines  

        Another thing I wanted to ask you again (I did it last summer or spring):  
        Please update me on any **hard deadline at least 5 days in advance**.

        It's not as important for me how you define hard deadline. Just as soon as you want me to think about anything as of hard deadline, please let me know 5 days ahead. Please. It will be super helpful.

        [10:46:16 AM] Ariel:
        Sure, I think I usually do. Unless it's an urgent bug just found or an urgent request from a customer. These we can't control.

        [10:46:24 AM] Vlad Zams. iOS & Android. Minsk & Tel-Aviv.:
        Sometimes I feel like you do. But there are times I feel it's not the case. Am I wrong?
        edited 
        > Ariel LTD
        > Sure, I think I usually do. Unless it's an urgent bug just found or an urgent request from a customer. These we can't control.
        Ok. Thanks then. It's good enough. Maybe the reason is that I just can't clearly see when you're specifying a regular request and when there is a hard deadline implied.

        [10:49:04 AM] Ariel:
        I guess there were cases where you estimated effort as 1-2 hours and then we waited for a week or more for that to be completed. Our expectation is that 1-2 hour effort defined as top prio task can be completed within a few days including when no deadline specified.
        Maybe in these cases I need to be more clear

        [10:49:56 AM] Vlad Zams. iOS & Android. Minsk & Tel-Aviv.:
        > Vlad Zams. iOS & Android. Minsk & Tel-Aviv.
        > Ok. Thanks then. It's good enough. Maybe the reason is that I just can't clearly see when you're specifying a regular request an
        Maybe we just introduce some confusion-avoidance tag like #dieHard ) ?  

        @ArielV_customer: I see, NP, we can use that  


[x]###### Sun Mar 1 19:01:29 MSK 2020; v 90m  
build_project_at_iliaSis_machine_LESE_iOS  
LESE_iOS  

    started ###### Sun Mar 1 19:02:49 MSK 2020
    done the same day, on Sun Mar 1. We had a Skype call for this  

[x]###### Sun Mar 15 16:51:44 MSK 2020; v 1h  
approve_pilot_project_estimation_for_Mar_Apr_2020_HSP_Android  
HSP_Android **done**  

    Rel:  approve_pilot_project_estimation_for_Mar_Apr_2020_HSP_iOS  

    @ArielV_customer approved Android estimated hours: 106.4h ###### Sun Mar 15 16:52:50 MSK 2020

[x]###### Sun Mar 8 15:20:26 MSK 2020; v 1h, i 2h 30m, v 15m
approve_pilot_project_estimation_for_Mar_Apr_2020_HSP_iOS  
HSP_iOS **done**  
    41-67 hours for iPhone were approved by Ariel on 20200307 Mar.

    Total approved budget (for both iPhone and iPad):
    70-95h  

    Finished estimating Android ###### Sun Mar 15 16:01:18 MSK 2020
    min (iPone ONLY)	Max (iPhone ONLY)	Min Android     Max Android
    53.5	            72.5	            46.9	        106.4

    [HSP_Delivery_Shedule](https://docs.google.com/spreadsheets/d/1jYpRanulU9zOjgyLG9rdr65MfmYQ7YNc88WEgBuMXYo/edit#gid=254106499)  

    [x] @VladZams >@IliaShved: can you please disable public link sharing for https://docs.google.com/spreadsheets/d/1jYpRanulU9zOjgyLG9rdr65MfmYQ7YNc88WEgBuMXYo/edit#gid=254106499 
        ?  

    [x] @VladZams >@IliaShved: Log total time spent on providing the estimates and the adjustments  

    @ArielV_customer: estimation clarifications request: https://docs.google.com/document/d/1VIhNmMfWmgIRCCiwaFjQvj2wf8skjc94GW9d5G0b20c/edit?usp=sharing

    [Specification](./extras/Hebrew_Speaking_Practice_App_v2.pdf)  

[x]###### Mon Feb 24 23:31:45 MSK 2020; v 15m, 30m  
move_topica_to_another_apple_account_Topica_iOS  
Topica_iOS  **done**  
    https://learn.buildfire.com/en/articles/3345275-how-to-transfer-your-app-from-one-apple-developer-account-to-another  

    ###### Wed Mar 11 09:56:47 MSK 2020  
    @ArielV_customer on Mar 4th: Topica finally transferred the app to their main account. Original in-app was transferred as well. Could you check please what's left to re-submit and let me know (effort, availability, what you need)? Top prio.

[x]###### Thu Mar 12 10:42:59 MSK 2020; v 30m
release_3.1.68.20200312_Topica_iOS  
Topica_iOS  
555a0d4  10:40 Thu Mar 12 2020 speakingpalapps_ios_nda  Topica: fixed bug_old_shop_opened_when_notFree_unit_selected_Topica_iOS


    [x] bug_old_shop_opened_when_notFree_unit_selected_Topica_iOS  
    [x] add_new_shop_accessible_from_side_menu_Topica_iOS  
    [] ? Anything else?

[x]###### Sat Mar 7 16:34:54 MSK 2020; v30m  
release_1.1.20_ECTV_iOS  
0efa931  13:31 Sun Mar 08 2020 speakingpalapps_ios_nda  show media image after each step if image is available

    ###### Sun Mar 15 18:25:00 MSK 2020
    This TestFlight release has been published on Mar 9th and wasn't documented properly. The commit specified as the one that went to release may be wrong. Now I'm releasing 1.1.21_ECTV_iOS  

[x]###### Thu Feb 27 23:16:13 MSK 2020; i 1h 15m, 3h 45m  
update_video_player_for_iOS_13_ECTV_iOS
ECTV_iOS **to_test** est: **4-5h**
748ebf0f  01:41 Tue Mar 03 2020 speakingpalapps_ios_nda  1.1.20.20200303_ECTV_iOS
    @VladZams: Update video player in ECTV app making it ready for iOS 13.
    That's the fiz we've already done for LESE and K12 apps.

    There is a problem with navigation from DownloadingUnitViewController to lesson VC
    See `playUnit` method inside DownloadingUnitViewController -- getLessonMenuViewControllerByMetadata method returns nil for some reason  


[x]###### Tue Mar 10 21:40:04 MSK 2020; is 30m, is 15m
dialog_script_flow_stays_after_retrying_it_ECTV_iOS  
ECTV_iOS **to_test**  
006d4c4a  21:42 Tue Mar 10 2020 speakingpalapps_ios_nda  clear state before showing again screen from navigation stack

    @IlyaSys: You can reproduce bug only if you firtsly skip dialog script.
        Look at done Flow method in ET3DialogViewController.m. If you skip previous dialog script and retry it, after all finishing all steps in property is Skipping will be true in this method. Clear the state

    @ArielV_customer:  
    **Steps to reproduce**:  
    1. At review page - press next.
    2. Then press RETRY
    3. The dialog will start again - but at the end of the dialog practice it will stay at the last screen and NOT turn to the review page

[x]###### Tue Mar 10 21:40:00 MSK 2020; is 20m, is 15m  
navigate_to_general_shop_in_category_ECTV_iOS
ECTV_iOS **to_test**  
21f77e8b  21:36 Tue Mar 10 2020 speakingpalapps_ios_nda  navigate to general show instead of category shop

    @IlyaSys: in CategoryCatalogViewControllerECTV.swift override navigateToShopScreen method and call performSegue with shop identifier and prepareForSegue write this identifier to show general shop screen

    @ArielV_customer: Shop button at the category page - leads to a category shop (not existing anymore) instead of the general shop page

[x]###### Mon Mar 9 23:50:58 MSK 2020; i 15m, i 40m  
dialog_script_crash_on_language_change_attempt_ECTV_iOS
ECTV_iOS **to_test**
0321606c  01:05 Tue Mar 10 2020 speakingpalapps_ios_nda  ECTV: added custom DialogScriptViewController to resolve crash on language switch attempt

    @ArielV_customer: Open a lesson -> Listen (Skip) -> Review -> click on the translations icon -> crashes  

[x]###### Sun Mar 8 13:32:03 MSK 2020; v 1h 10m, is 1h  
bug_images_not_updated_during_dialog_cityGrammar1_comparison1_ECTV_iOS  
ECTV_iOS  **to_test**  **branch_already_created**  
0efa9317  13:31 Sun Mar 08 2020 speakingpalapps_ios_nda  show media image after each step if image is available

    Audio input/output during the dialog is ok. But picture in the video_player_frame isn't updated during along with dialog part are going on  

    **Steps to reproduce**:  
    
        1. run on iPad with Guest (default) user  
        2. Go to MainMenu --> CityGrammar1 (1st Item) --> Comparisons1 (1st Unit) --> 1st UnitPart  
        3. See the image in the player stays static while dialog goes on  
    
    [x] Check iPhone  
        : Does NOT work as well, picture is not being updated
    
    [x] Check LESE on iPhone  
        Doesn't work neither.  

    @VladZams >@ArielV_customer?: It's annoying problem we had in K12: supporting all sorts of images/video content in dialogs. The thing that would help a lot is an extensive spec about types of content for VideoFrame in interactive_dialog.  
        
        @ArielV_customer:  It's either video or image. What's the problem?  

        @VladZams: Is that this simple? I thought there may be differences among types of image-based content. Like at least 
            * single image for all the parts of the dialog (so, the videoFrame shouldn't be updated to avoid blinking)
            * one image per each part of the dialog, so it needs to be updated right after user void input is captured and recognition results has been received.
            Isn't it the case?  

    [x] Video recorded and shared with @ArielV_customer 
        [Video](./extras/1.bug_images_not_updated_during_dialog_cityGrammar1_comparison1_ECTV_iOS.mov)

        @ArielV_customer: First of all, you can always compare with Android. This should give you some reference point.  

            Obviously the image shall change. What I mentioned is that there are two possible flows: one is video based (with or without image pre/post frames) and another one is image based.  

            Comparisons has to be fixed. No point in releasing it beforehand  

        @ArielV_customer: Please update me on the hours spent on ECTV iOS so far when you have a chance.

            Vlad Zams. iOS & Android Dev:
            7.5 hours.

[x]###### Sat Mar 7 16:34:54 MSK 2020; v 2h  
release_1.1.21_ECTV_iOS  
ECTV_iOS  
285a57e  21:36 Tue Mar 10 2020 speakingpalapps_ios_nda  navigate to general show instead of category shop  

    ###### Sun Mar 15 18:49:36 MSK 2020
    development branch was rebased on master. Release was made from master. development branch has been just deleted from remote and local repos. It can be recreated later if need.  
    
    [x] update version to 1.1.21.20200315_ECTV_iOS  
    
    [x] dialog_script_flow_stays_after_retrying_it_ECTV_iOS  
        Test passed ###### Sun Mar 15 18:06:44 MSK 2020
    [x] dialog_script_crash_on_language_change_attempt_ECTV_iOS  
        Test passed ###### Sun Mar 15 17:58:21 MSK 2020
    [x] bug_images_not_updated_during_dialog_cityGrammar1_comparison1_ECTV_iOS  
        Test passed ###### Sun Mar 15 18:07:48 MSK 2020
    [x] navigate_to_general_shop_in_category_ECTV_iOS  
        Test passed ###### Sun Mar 15 18:08:23 MSK 2020
    [x] update_video_player_for_iOS_13_ECTV_iOS  
        Test passed ###### Sun Mar 15 18:15:18 MSK 2020  

    Issues:  
    @VladZams >@ArielV_customer?: Ariel, would you please check if SP backend operates well? I'm getting "Not connected" error quite often, at random moments during passing the dialogs and during login

        [6:02:12 PM] Ariel:
        Seems to be quite responsive to me

        [6:02:24 PM] [] Vlad Zams. iOS & Android Dev:
        ... And then "Connection failed" errors as well.

        [6:02:30 PM] Ariel:
        The ASR you mean?

        [6:02:34 PM] [] Vlad Zams. iOS & Android Dev:
        Yes.

        [6:02:41 PM] Ariel:
        Let me see
        
        [6:04:56 PM] [] Vlad Zams. iOS & Android Dev:
        But login (app launching) seems to take longer than usual as well. And sometimes gets error as well (more often than usual).  
                    
        @ArielV_customer:  Seems to be your local network problem. But send me a report if you encounter an issue like connection failed
        (from the app - the log I mean)

        [6:12:40 PM] [] Vlad Zams. iOS & Android Dev:
        I'm in release mode, don't have the log at hand. Anyways, now it seems everything became a bit better.

        [6:13:34 PM] Ariel:
        Ok, might be a temporary issue (Amazon or servers')
    
    rebased developmnet on master ###### Sun Mar 15 17:41:08 MSK 2020  
    [x] merge development into master  
        285a57e  21:36 Tue Mar 10 2020 speakingpalapps_ios_nda  navigate to general show instead of category shop  

[x]###### Tue Mar 17 21:01:26 MSK 2020; i 15m, v 20m, is 35m
dialog_script_video_stays_on_screen_after_playback_ECTV_iOS  
ECTV_iOS **merged**  
fb5a98c  01:17 Wed Mar 18 2020 speakingpalapps_ios_nda  1.1.22.20200318_ECTV_iOS  

    ###### Sun Mar 15 19:35:42 MSK 2020  
    Alternative name:  
        bug_dialogReview_replay_video_within_cell_video_stays_after_dialog_part_finished_ECTV_iOS

    @ArielV_customer: in the review screen the example video is stays there after the playback (should disappear). No way to may it close.

    @IlyaShved >@VladZams:
        Can't reproduce. On my device video appears at all, but i can hear its audio track  

    **Steps to reproduce**:  
    
        1. login as guest, enter the dialog (dialog_cityGrammar1_comparison1)  
        2. finish the dialog OR press skip in top-right corner
        --> app navigated to DialogReview screen with dialog bubble cells  
        3. Expand the 1st user cell (should be expanded by default)
        4. Within the cell, in the bottom_practice_panel press the most left blue button, wait for the dialog_replica playback finishes  
        
        **Actual result**  
        Cell doesn't switch back from video frame to original transcript mode, video frame stays withing the cell  

        **Expected**:  
        Cell state should be back to the default state: transcript + bottom_practice_panel  

[x]###### Wed Mar 18 01:38:00 MSK 2020; v 30m  
release_1.1.22.20200318_ECTV_iOS  
ECTV_iOS  
fb5a98c  01:17 Wed Mar 18 2020 speakingpalapps_ios_nda  1.1.22.20200318_ECTV_iOS  
    
    [x] dialog_script_video_stays_on_screen_after_playback_ECTV_iOS  

[x]###### Wed Mar 18 01:42:29 MSK 2020; v 30m, 1h  
release_3.1.68.20200312_Topica_iOS  
Topica_iOS  **done**  
7372f94  08:49 Fri Mar 13 2020 speakingpalapps_ios_nda  3.1.68.20200312_Topica_iOS

    [x] get from Topica any of the 3 active [certificates required by XCode](./extras/required_certificates_release_3.1.68.20200312_Topica_iOS.jpg)  

        ###### Fri Mar 20 02:16:26 MSK 2020
        A new certificate has been issues using my machine. The one of the existing 3 has been deleted after getting the approve from Topica  

        [XCode_error_message](./extras/XCode_error_message_release_3.1.68.20200312_Topica_iOS.jpg)


    [x] Checked certificates shared by Topica  
        * .../SpeakP/Topica/iOS/Certificates_provisioning_profiles_keys_AppStore_Apple_Topica_NativeTalk/202003_Mar/1_cerlap.p12  

            @VladZams: item (cerlap.p12) is protected with the password. Did Topica share the password?

                @ArielV_customer: Nope  

        * .../SpeakP/Topica/iOS/Certificates_provisioning_profiles_keys_AppStore_Apple_Topica_NativeTalk/202003_Mar/2_Certificates.p12  

            @VladZams: item has been successfully imported to my machine. But it's none of the 3 active distribution certificates.

[x]###### Tue Mar 24 17:40:29 MSK 2020; v 30m
release_3.1.69.20200324_Topica_iOS  
Topica_iOS  **done**  
30ac8b2  17:32 Tue Mar 24 2020 speakingpalapps_ios_nda  3.1.69.20200324_Topica_iOS

[x]###### Tue Mar 24 17:41:07 MSK 2020; v 20m  
release_1.1.23.20200324_ECTV_iOS  
ECTV_iOS **done**  
2e21722  15:56 Tue Mar 24 2020 speakingpalapps_ios_nda  1.1.23.20200324_ECTV_iOS  

[x]###### Fri Mar 20 02:15:12 MSK 2020; v 2h  
submit_3.1.68.20200312_to_Apple_reivew_Topica_iOS  
Topica_iOS **done**  
30ac8b2  17:32 Tue Mar 24 2020 speakingpalapps_ios_nda  3.1.69.20200324_Topica_iOS  

    There was a long discussion in email about issuing new production certificate  
    
    appstore@speakingpal.com  
    edTV55jw  

[x]###### Tue Mar 3 20:40:09 MSK 2020; v 30m, is 1h
crash_on_entering_2nd_unit_in_City_Grammar_1_Category_ECTV_iOS  
ECTV_iOS  **cancelled**  
7291fc0  09:19 Tue Mar 03 2020 speakingpalapps_ios_nda  Infra: created `ECTV_release` build scheme, added `NativeTalk` scheme to git repo  

    @IlyaSys: 
        Can't reproduce bug on following devices:
        Simulator - iPhone 8 iOS 13.0
        Simulator - iPhone 5 iOS 10.3.1
        Real Device - iPhone 7 iOS 13.1.3  

        Quite probably crash is caused by not-enough-memory on old weak devices  

    @IliaShved:  
        `words = "<relationship fault: 0x10afd52b0 'words'>";` appears even on working devices, but there is no crash following that error message in logs  

    [stacktrace](./extras/1.crash_on_entering_2nd_unit_in_City_grammar_Category_ECTV_iOS.log)  

        @VladZams: Looks like Sth wrong with CoreData scheme. More specifically, with 'words' entity or relation:  
        `words = "<relationship fault: 0x10afd52b0 'words'>";`
    
    Crash happens at least in `release` build. You can use `ECTV_release` build scheme  

    **Steps to reproduce**:  
    
        1. Remove ECTV app from your iPhone  
        2. Install ECTV by running `ECTV_release` build scheme in Xcode  
        --> App starts and you should be logged in as Guest user and being navigated to MainMenu screen  
        3. Go to CityGrammar1 --> Comparisons2

        **Actual result**  
        App crashes  
        Debug build works ok, but the same `relationship fault` error is printed to console output. So, it maybe the case that Release build is less tolerant to such faults and as a result we're crashing there.  

        **Expected**:  
        UnitMenu screen should appear  

[x]###### Thu Feb 20 22:23:29 MSK 2020; v 1h, 3h, 3h i 40m, i 1h 30m, i 1h
add_new_shop_accessible_from_side_menu_Topica_iOS  
Topica_iOS **done**  
30ac8b2  17:32 Tue Mar 24 2020 speakingpalapps_ios_nda  3.1.69.20200324_Topica_iOS  

    @IlyaShved > @VladZams:
        it seems that customer's Apple Developer Account reached devices limits
        [screenshot](./extras/native_talk_devices_limit.png)  

    ###### Thu Mar 12 08:39:25 MSK 2020
    Try tpksb@s.pal
    Pass naspa123
        it only has 3 categories  
        2 Super Basic and Sounds  
        If you see more than that, it's probably a bug of not cleaning previous account data  

    ###### Wed Mar 11 23:50:05 MSK 2020
    Account where sounds are not included for free:  
        arielv@speakingpal.com
        12345678

    ###### Wed Mar 10  
    [Video recorded](./extras/1.add_new_shop_accessible_from_side_menu_Topica_iOS_20200311.mp4)

    @VladZams >@ArielV_customer?: Please, see 13-14 sec of the video I shared yesterday. There are paid units in Sounds category. Seems like clicking those leads the old-style MoreLessons screen. Should it be that way?  
        
        @ArielV_customer:  No, should launch the new shop

    ###### Wed Mar 11 11:11am  
    @VladZams: Ariel, have just found an issue we still haven't fixed in Topica: accessing newShop from within categories.  

    Topica shop - should be launched from the side menu. Replace (restore) the Invite Friend button that was there already, call it Shop.  

    [x] Renamed `PurchaseSubscriptionVC` to `ShopVC`  

    [x] Test navigation to shop from
        [x] sideMenu

    [x] Test purchase items  
        Subscription purchase works, but no content unlocks
        [] To_wait_for_response_from_Topica_email_Feb_21_2020_10_46_am: >Topica?:  
            Topica:  

    [] to ask: @VladZams >@ArielV_customer?: shouldn't ID of the singe 1-plan in TopicaShopHTML be `price-1y` instead of current `price-6m`?  
        
        @ArielV_customer:  

    [x] Inherit `ShopVC.swift` from `BaseViewController.h`  

    [x] **Finally**
        [x] Restore navigation to Write&Speak screen
            Topica/Features/MainMenu/TopicaMainMenuViewController.m:57
            
        [x] Restore new_shop links for LESE  
            EnglishTutor3/Features/ManualTests/PurchaseSubscriptionVC.swift:56  

    [x] Handle clicks on the singe Topica_purchase_item properly  

    [] Current issue:  
        I'm getting response from Apple that this's plan isn't valid: 
            ```
            2020-02-20 23:45:18.111877+0300 Topica[597:956963] Invalid product id: edu.topica.nativetalk.1year
            ```

        [] 1.Have you enabled In-App Purchases for your App ID?
            ###### Fri Feb 21 01:40:26 MSK 2020
            Impossible to check: no access to developer.apple.com  
        
        [] 3.Have you submitted (and optionally rejected) your application binary?  

        [] 10.Are your bank details active on iTunes Connect? (via Mark)
            ###### Fri Feb 21 02:05:47 MSK 2020
            Impossible to check: no access to Agreements on AppStoreConnect  
        
        [x] 2.Have you checked Cleared for Sale for your product?  
        
        [x] 4.Does your project’s .plist Bundle ID match your App ID?
        
        [x] 5.Have you generated and installed a new provisioning profile for the new App ID?
        
        [x] 6.Have you configured your project to code sign using this new provisioning profile?
        
        [x] 7.Are you building for iPhone OS 3.0 or above?
        
        [x] 8.Are you using the full product ID when when making an SKProductRequest?
        
        [x] 9.Have you waited several hours since adding your product to iTunes Connect?
        
        [x] 11.Have you tried deleting the app from your device and reinstalling?

              src: https://stackoverflow.com/questions/22631700/productsrequest-didreceiveresponse-returns-invalid-products
        
    [x] Topica shop link:  https://sp-prod-lms-storage.s3-eu-west-1.amazonaws.com/content/public/topica-shop/shop.html  

    [x] update side menu  
        [x] iPhone  
        [x] iPad  

    NOTE on BillerID:  
        @ArielV_customer: Topica has `"biller_id" = "AisBiller"` - found in the app log, so no need to check. I'll create a matching purchase plan

            @VladZams: So, should the ID be changed within Topica app codebase?
            @ArielV_customer: No, we'll use it as is  

[x]###### Tue Mar 24 23:23:04 MSK 2020; v 30m  
estimate_crash_fixes_20200324_Topica_iOS  
Topica_iOS  
30ac8b2  17:32 Tue Mar 24 2020 speakingpalapps_ios_nda  3.1.69.20200324_Topica_iOS

    [crash28](./extras/log_28.crash)
    [crash29](./extras/log_29.crash)  

    Please have a look and let me know how long a fix may take.
    Topica iOS
    If it's a matter of 1- 2 hours, let's fix and resubmit.
        [log.txt (29).crash] 15 KB
        Same here (a different crash)

        [11:26:14 PM] [] Vlad Zams. iOS & Android Dev:
        >  log.txt (28).crash
        It's from Version 1.9.59.20190619, just FYI.

        [11:43:53 PM] Ariel:
        > [] Vlad Zams. iOS & Android Dev Minsk & Tel-Aviv
        > It's from Version 1.9.59.20190619, just FYI.
        Ignore it then, I was sure I’ve seen two crashes in the new version. Will check

[x]###### Fri Apr 3 04:18:31 MSK 2020; v 1h
release_4.1.275.20200403_LESE_Android  
LESE_Android **done**  
08bb308  03:40 Fri Apr 03 2020 speakingpal_apps_android_nda  4.1.275.20200403_LESE_Android  

    4.1.275.20200403 #LESE_Android  
    https://drive.google.com/drive/u/0/folders/1U0Ry8-mEtDYr0SuNEw7S28iMzX9edXWx  

    [x] reaunthenticate_user_when_facebook_login_in_use_LESE_Android  
    [x] webShop_LESE_Android  


[x]###### Wed Apr 1 14:20:34 MSK 2020; i 5h
reaunthenticate_user_when_facebook_login_in_use_LESE_Android  
LESE_Android **merged** **to_test**  
81ef5f9  02:17 Fri Apr 03 2020 speakingpal_apps_android_nda  some changes in FacebookLoginManager and SpMainUiActivity reversed  


[x]###### Tue Mar 24 20:05:05 MSK 2020; i 20m, i 20m 10m 8h, mr 2h
webShop_LESE_Android  
LESE_Android **merged** **to_test**  
419534f  23:32 Tue Mar 31 2020 speakingpal_apps_android_nda  provided localization for WebShop greeting message

    Dev notes: [Archive](./extras/archive_new_shop_screen_LESE_iOS.md)

    Subtasks:
        [x] Create activity with webView and render html
        
            URL to load:  
            https://cdn.speakingpal.com/content/public/lese-shop/shop.html
        
        [x] inject JavaScript code that will replace hardcoded prices and currenceis with ones we recieved from Google Play
            
            subscription ids: 
                com.speakingpal.ettr.annual - id of element with price in html code is "price-1y"
                com.speakingpal.ettr.6monthly - id of element with price in html code is "price-6m"
                com.speakingpal.ettr.monthly - id of element with price in html code is "price-1m"
            
            class of element with currency symbol in html code is "currency"

        [x] inject JavaScript code to be able to handle taps on elements to start native android purchase flow  
